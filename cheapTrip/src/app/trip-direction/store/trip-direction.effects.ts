import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import {
  switchMap,
  catchError,
  map,
  tap,
  withLatestFrom,
  mergeMap,
} from 'rxjs/operators';
import { of } from 'rxjs';
import { environment } from '../../../environments/environment';

import * as TripDirectionActions from './trip-direction.actions';
import {
  IDetails,
  IPath,
  IPathPoint,
  IPoint,
  IRout,
} from '../trip-direction.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';

enum Icons {
  FLIGHT = `<span class="material-icons">
  flight
  </span>`,
  BUS = `<span class="material-icons">
  directions_bus
  </span>`,
  TRAIN = `<span class="material-icons">
  directions_railway
  </span>`,
  SUBWAY = `<span class="material-icons">
  directions_subway
  </span>`,
  SHIP = `<span class="material-icons">
  directions_boat
  </span>`,
  ONFOOT = `<span class="material-icons">
  directions_walk
  </span>`,
  CAR = `<span class="material-icons">
  directions_car
  </span>`,
}
const PATHMAP = new Map();

PATHMAP.set('mixed_routes', {
  type: 'Mixed Trip',
  icon: [Icons.BUS, Icons.FLIGHT],
});
PATHMAP.set('flying_routes', {
  type: 'Air Trip',
  icon: [Icons.FLIGHT],
});
PATHMAP.set('ground_routes', {
  type: 'Ground Trip',
  icon: [Icons.TRAIN, Icons.SUBWAY],
});

const PATHMAPDETAILED = new Map();
PATHMAPDETAILED.set('Bus', Icons.BUS);
PATHMAPDETAILED.set('Flight', Icons.FLIGHT);
PATHMAPDETAILED.set('Train', Icons.TRAIN);
PATHMAPDETAILED.set('Ride Share', Icons.TRAIN);

@Injectable()
export class TripDirectionEffects {
  constructor(
    private actions$: Actions,
    private sanitizer: DomSanitizer,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  @Effect()
  getAutocomplete$ = this.actions$.pipe(
    ofType(TripDirectionActions.GET_AUTOCOMPLETE),
    switchMap((request: { payload: IPoint; type: string }) => {
      const URL =
        environment.url +
        'CheapTrip/getLocations?type=' +
        request.payload.type +
        '&search_name=' +
        encodeURIComponent(request.payload.name);
      return this.http.get<IPathPoint[]>(URL).pipe(
        map((res) => {
          const newAction =
            request.payload.type === '1'
              ? new TripDirectionActions.SetStartPointAutocomplete(res)
              : new TripDirectionActions.SetEndPointAutocomplete(res);
          return newAction;
        }),
        catchError((error) => {
          const errorMessage = 'An unknown error occured!';
          return of(new TripDirectionActions.AutoCompleteFail(error));
        })
      );
    })
  );

  @Effect()
  getRouts$ = this.actions$.pipe(
    ofType(TripDirectionActions.GET_ROUTS),
    //  withLatestFrom(this.store.select('directions')),

    switchMap(
      (request: { payload: [IPathPoint, IPathPoint]; type: string }) => {
        const URL =
          environment.url +
          'CheapTrip/getRoute?format=json&from=' +
          request.payload[0].id +
          '&to=' +
          request.payload[1].id;
        return this.http.get(URL).pipe(
          map((res) => {
            const resultPathArr = this.transformObject(res);
            const endPoints = {
              from: request.payload[0],
              to: request.payload[1],
            };
            return new TripDirectionActions.SetRouts({
              paths: resultPathArr,
              endPoints: endPoints,
            });
          }),
          catchError((error) => {
            const errorMessage = 'An unknown error occured!';
            console.log('error', error);
            return of(new TripDirectionActions.AutoCompleteFail(error));
          })
        );
      }
    )
  );

  private transformObject(obj: object): IPath[] {
    const objArr: IPath[] = [];
    for (const i in obj) {
      const transformedDetails = this.transformDetails(obj[i]);
      const testObj: IPath = {
        pathType: PATHMAP.get(i).type,
        details: transformedDetails,
      };
      objArr.push(testObj);
    }
    return objArr;
  }

  private transformDetails(obj: IDetails): IDetails {
    const transport = this.getTransport(obj.direct_paths);
    const points = this.getPoints(obj.direct_paths);
    const newPaths = obj.direct_paths.map((item) => {
      return {
        ...item,
        duration_minutes: this.transformTime(+item.duration_minutes),
        euro_price: this.transformPrice(+item.euro_price),
      };
    });

    const newObj: IDetails = {
      direct_paths: newPaths,
      euro_price: this.transformPrice(+obj.euro_price),
      duration_minutes: this.transformTime(+obj.duration_minutes),
      points: points,
      transport: transport,
    };
    return newObj;
  }

  private transformTime(minutes: number): string {
    const days = Math.floor(minutes / 60 / 24);
    const dayStr = days === 0 ? '' : days === 1 ? days + ' day' : days + ' days';
    const hours = Math.floor(minutes / 60 - days * 24);
    /*  const hourStr =
      hours == 0 ? '' : hours == 1 ? hours + ' hour' : hours + ' hours'; */
    const hourStr = hours + 'h';
    const min = minutes - days * 24 * 60 - hours * 60;
    /*    const minStr =
      min == 0 ? '' : min == 1 ? min + ' minute' : min + ' minutes'; */
    const minStr = min + 'min';
    return dayStr + ' ' + hourStr + ' ' + minStr;
  }

  private transformPrice(price: number): number {
    const euro = Math.floor(+price);
    const cent = Math.floor(+price - euro) * 10;
    const euroStr = euro === 0 ? '' : euro + ' euro';
    const centStr = cent === 0 ? '' : cent + ' cent';
    // return euroStr + '' + centStr;
    return price;
  }

  private mapSanitazingDetaled(): Map<string, SafeHtml> {
    const newSanitisedMap = new Map<string, SafeHtml>();
    PATHMAPDETAILED.forEach((value, key, _map) => {
      newSanitisedMap.set(key, this.sanitizer.bypassSecurityTrustHtml(value));
    });
    return newSanitisedMap;
  }

  private getTransport(paths: IRout[]): SafeHtml[] {
    const sanitisedMap = this.mapSanitazingDetaled();
    const result = [];
    paths.map((item) => {
      const smth = sanitisedMap.get(item.transportation_type);
      result.push(smth);
    });

    return result;
  }

  private handleError(err: HttpErrorResponse): void {
    let message = '';
    switch (err.status) {
      case 201:
        message = 'dfdfdf';
        break;
      case 400:
        message = 'dfdfdf';
        break;
    }
  }

  private getPoints(paths: IRout[]): Set<string> {
    const transformedArr = paths.map((item) => [item.from, item.to]);
    const result = new Set(transformedArr.reduce((a, b) => a.concat(b), []));
    return result;
  }
}
