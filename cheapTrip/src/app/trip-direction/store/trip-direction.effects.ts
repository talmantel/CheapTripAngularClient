import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import * as TripDirectionActions from './trip-direction.actions';
import { IDetails, IPath, IPoint, IPoints } from '../trip-direction.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


const DIRECTIONS_AUTOCOMPLETE = [
  'Moscow',
  'Tel-Aviv',
  'London',
  'Viena',
  'San-Paolo',
  'Krakow',
  'Bansko',
];


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

const PATHS = `{"mixed_routes":
{"direct_paths":
[
  {
    "transportation_type":"Bus",
    "euro_price":19.3951,
    "duration_minutes":3360,
    "from":"Bournemouth",
    "to":"Bucharest"},
    {
    "transportation_type":"Bus",
    "euro_price":12.5216,
    "duration_minutes":509,
    "from":"Bucharest",
    "to":"Budapest"}
],
"euro_price":31.0,
"duration_minutes":3869
},

"flying_routes":{"direct_paths":[{"transportation_type":"Flight","euro_price":76.0,"duration_minutes":347,"from":"Bournemouth","to":"Alicante"},{"transportation_type":"Flight","euro_price":47.8124,"duration_minutes":361,"from":"Alicante","to":"Budapest"}],"euro_price":123.0,"duration_minutes":708},"ground_routes":{"direct_paths":[{"transportation_type":"Bus","euro_price":19.3951,"duration_minutes":3360,"from":"Bournemouth","to":"Bucharest"},{"transportation_type":"Bus","euro_price":12.5216,"duration_minutes":509,"from":"Bucharest","to":"Budapest"}],"euro_price":31.0,"duration_minutes":3869}}`;

//const MY_URL = 'http://localhost:3000/api/';

@Injectable()
export class TripDirectionEffects {
  constructor(private actions$: Actions, private sanitizer: DomSanitizer,  private http: HttpClient,
    private router: Router, private route: ActivatedRoute) {}

  @Effect()
  getAutocomplete$ = this.actions$.pipe(
    ofType(TripDirectionActions.GET_AUTOCOMPLETE),
    switchMap((request: { payload: IPoint }) => {
      return of(DIRECTIONS_AUTOCOMPLETE).pipe(
        map((res) => {
          const newAction =
            request.payload.type == 'startPoint'
              ? new TripDirectionActions.SetStartPointAutocomplete(res)
              : new TripDirectionActions.SetEndPointAutocomplete(res);

          return newAction;
        })
      );
    })
  );

  @Effect()
  getRouts$ = this.actions$.pipe(
    ofType(TripDirectionActions.GET_ROUTS),
    switchMap((request: { payload: IPoints }) => {
      return of(PATHS).pipe(
        map((res) => {
          const result: IPath[] = this.transformObject(JSON.parse(res));
         /* const queryParams = { from: request.payload.startPoint, to: request.payload.endPoint };
         this.router.navigate(['path', queryParams], { relativeTo: this.route });
         console.log('query params', queryParams); */
          return new TripDirectionActions.SetRouts(result);
        })
      );
    })
  );

  @Effect({ dispatch: false })
   setRouts$ = this.actions$.pipe(
     ofType(TripDirectionActions.SET_ROUTS),
     tap(() => {
       console.log('navigate effect', this.route);
       this.router.navigate(['/search/myPath'],{ queryParams: { from: 'startPOint', to: "endPoint" }});
      }
  ));

  private transformObject(obj: object): IPath[] {
    let objArr: IPath[] = [];
    for (let i in obj) {
      const transformedDetails = this.transformDetails(obj[i]);
      const testObj = {
        pathType: this.mapSanitazing().get(i),
        details: transformedDetails,
      };
      const newObj = { pathType: PATHMAP.get(i), details: transformedDetails };
      objArr.push(testObj);
    }
    return objArr;
  }

  private transformDetails(obj: IDetails): IDetails {
    const newPaths = obj.direct_paths.map((item) => {
      return {
        ...item,
        duration_minutes: this.transformTime(+obj.duration_minutes),
        euro_price: this.transformPrice(+obj.euro_price),
      };
    });
    const newObj = {
      direct_paths: newPaths,
      euro_price: this.transformPrice(+obj.euro_price),
      duration_minutes: this.transformTime(+obj.duration_minutes),
    };
    return newObj;
  }

  private transformTime(minutes: number): string {
    const days = Math.floor(minutes / 60 / 24);
    const dayStr = days == 0 ? '' : days == 1 ? days + ' day' : days + ' days';
    const hours = Math.floor(minutes / 60 - days * 24);
    const hourStr =
      hours == 0 ? '' : hours == 1 ? hours + ' hour' : hours + ' hours';
    const min = minutes - days * 24 * 60 - hours * 60;
    const minStr =
      min == 0 ? '' : min == 1 ? min + ' minute' : min + ' minutes';
    return dayStr + ' ' + hourStr + ' ' + minStr;
  }

  private transformPrice(price: number): string {
    const euro = Math.floor(+price);
    const cent = Math.floor(+price - euro) * 10;
    const euroStr = euro == 0 ? '' : euro + ' euro';
    const centStr = cent == 0 ? '' : cent + ' cent';
    return euroStr + '' + centStr;
  }

  private mapSanitazing(): Map<string, { type: string; icon: SafeHtml[] }> {
    let newMap = new Map<string, { type: string; icon: SafeHtml[] }>();
    PATHMAP.forEach((value, key, map) => {
      const sanitizedArr = value.icon.map((icon) =>
        this.sanitizer.bypassSecurityTrustHtml(icon)
      );
      const val = {
        ...value,
        icon: sanitizedArr,
      };

      newMap.set(key, val);
      return newMap;
    });
    return newMap;
  }
}
