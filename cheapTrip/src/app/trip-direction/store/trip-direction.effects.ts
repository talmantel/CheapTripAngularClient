import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

import * as TripDirectionActions from './trip-direction.actions';
import {
  IDetails,
  IPath,
  IRecievedRouts,
  IRout,
} from '../trip-direction.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';

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
  TAXI = `<span class="material-icons">
  local_taxi
  </span>`,
  SHUTTLE = `<span class="material-icons">
  shuttle
  </span>`,
}

const PATHMAP = new Map<string, { type: string }>();
PATHMAP.set('mixed_routes', {
  type: 'Mixed Trip',
});
PATHMAP.set('flying_routes', {
  type: 'Air Trip',
});
PATHMAP.set('ground_routes', {
  type: 'Ground Trip',
});

const PATHMAPDETAILED = new Map();
PATHMAPDETAILED.set('Bus', Icons.BUS);
PATHMAPDETAILED.set('Flight', Icons.FLIGHT);
PATHMAPDETAILED.set('Train', Icons.TRAIN);
PATHMAPDETAILED.set('Ride Share', Icons.CAR);
PATHMAPDETAILED.set('Car Drive', Icons.CAR);
PATHMAPDETAILED.set('Walk', Icons.ONFOOT);
PATHMAPDETAILED.set('Town Car', Icons.CAR);
PATHMAPDETAILED.set('Car Ferry', Icons.CAR);
PATHMAPDETAILED.set('Shuttle', Icons.SHUTTLE);
PATHMAPDETAILED.set('Taxi', Icons.TAXI);

@Injectable()
export class TripDirectionEffects {
  constructor(
    private actions$: Actions,
    private sanitizer: DomSanitizer,
    private http: HttpClient,
    private router: Router,
    private store$: Store<fromApp.AppState>
  ) {
    //   this.server = 'tomcat'; //to be fixed
    // this.server = Server.SERVER104;
  }

  /*  @Effect()
  newEffect = this.actions$.pipe(
    ofType(TripDirectionActions.GET_AUTOCOMPLETE),
     withLatestFrom(this.store$.select('directions')),
     tap(state => {console.log('new effect, ', state)}),
     mergeMap(req =>{
       console.log('new effect,', req);
       return of('1')
     })
  ) */

  // 'http://52.14.161.122:8080/locations?type=from&search_name=6',
  // http://3.23.159.104:3333/CheapTrip/getLocations?type=1

  @Effect()
  getAutocomplete$ = this.actions$.pipe(
    ofType(TripDirectionActions.GET_AUTOCOMPLETE),
    withLatestFrom(this.store$.select('directions')),
    switchMap((request: Array<any>) => {
      let url = '';

      if (request[1].currentServer === 'server68') {
        url =
          environment.url68 +
          'locations?type=' +
          'from' +
          // request[0].payload.type +
          '&search_name=' +
          encodeURIComponent(request[0].payload.name);
      } else {

        url =
          environment.url104 +
          'locations?type=' +
          'from' +
          // request[0].payload.type +
          '&search_name=' +
          encodeURIComponent(request[0].payload.name);
      }

      return this.http
        .get<any>(url, { observe: 'response' })
        .pipe(
          map((res) => {
            const newAction =
              request[0].payload.type === 'from'
                ? new TripDirectionActions.SetStartPointAutocomplete(res.body)
                : new TripDirectionActions.SetEndPointAutocomplete(res.body);
            return newAction;
          })
          /*  catchError((error) => {
          console.log('error', error);
          this.handleError(error);

          return of(new TripDirectionActions.AutoCompleteFail(error));
        }) */
        );
    })
  );

  @Effect()
  getRouts$ = this.actions$.pipe(
    ofType(TripDirectionActions.GET_ROUTS),
    withLatestFrom(this.store$.select('directions')),
    switchMap((request: Array<any>) => {
      let url = '';
      if (request[1].currentServer === 'server68') {
        url =
          environment.url68 +
          'routes?from=' +
          request[1].startPoint.id +
          '&to=' +
          request[1].endPoint.id;
      } else {
        url =
          environment.url104 +
          'routes?from=' +
          request[1].startPoint.id +
          '&to=' +
          request[1].endPoint.id;
      }

      return this.http.get(url, { observe: 'response' }).pipe(
        map((res) => {
          let resultPathArr = null;

          resultPathArr = this.transformObject(res.body as IRecievedRouts[]);
          const endPoints = {
            from: request[1].startPoint,
            to: request[1].endPoint,
          };
          const queryParams = {
            from: request[1].startPoint.name,
            fromID: request[1].startPoint.id,
            to: request[1].endPoint.name,
            toID: request[1].endPoint.id,
          };
          this.router.navigate(['/search/myPath'], {
            queryParams,
          });

          return new TripDirectionActions.SetRouts({
            paths: resultPathArr,
            endPoints: endPoints,
          });
        })
        /* atchError((error) => {
            const errorMessage = 'An unknown error occured!';
            this.handleError(error);
            return of(new TripDirectionActions.AutoCompleteFail(error));
          }) */
      );
    })
  );

  /*   private transformObjectTomCat(obj: object): IPath[] {
    const objArr: IPath[] = [];
    for (const i in obj) {
      const transformedDetails = this.transformDetails(obj[i]);
      const testObj: IPath = {
        pathType: PATHMAP.get(i).type,
        details: transformedDetails,
      };
      objArr.push(testObj);
    }
    return this.reducedPaths(objArr);
  } */

  private transformObject(routs: IRecievedRouts[]): IPath[] {
    const objArr: IPath[] = [];
    routs.forEach((rout) => {
      const details = {
        euro_price: rout.euro_price,
        duration_minutes: rout.duration_minutes,
        direct_paths: rout.direct_paths,
      };
      const transformedRout: any = {
        pathType: rout.routeType,
        details: this.transformDetails(details),
      };
      if (transformedRout.details['duration_minutes'] != '  0min') {
        objArr.push(transformedRout);
      }
    });
    return this.reducedPaths(objArr);
  }

  private transformDetails(obj: any): IDetails {
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
    const dayStr = days < 1 ? '' : days + 'd';
    const hours = Math.floor(minutes / 60 - days * 24);
    const hourStr = hours < 1 ? '' : hours + 'h';
    const min = minutes - days * 24 * 60 - hours * 60;
    const minStr = min + 'min';

    return dayStr + ' ' + hourStr + ' ' + minStr;
  }

  private transformPrice(price: number): number {
    const euro = Math.floor(+price);
    const cent = Math.floor(+price - euro) * 10;
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
    let errorMessage = '';

    if (err.error instanceof ErrorEvent) {
      // client-side error
      //  errorMessage = `Error: ${err.error.message}`;
    } else {
      // server-side error
      //   errorMessage = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    //  window.alert(errorMessage);
  }

  private getPoints(paths: IRout[]): Set<string> {
    const transformedArr = paths.map((item) => [item.from, item.to]);
    const result = new Set(transformedArr.reduce((a, b) => a.concat(b), []));
    return result;
  }

  private reducedPaths(paths: IPath[]): IPath[] {
    const stringifyArr = paths.map((p) => JSON.stringify(p.details));
    let ind = -1;
    for (let i = 1; i < paths.length; i++) {
      if (stringifyArr[0] == stringifyArr[i]) {
        ind = i;
      }
    }
    return paths.filter((_path, index) => {
      return index != ind;
    });
  }
}
