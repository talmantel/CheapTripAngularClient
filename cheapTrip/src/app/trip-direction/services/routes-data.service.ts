import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, forkJoin, Subscription } from 'rxjs';
import { CacheService } from 'src/app/service/cache.service';
import {
  IJsonTravelData,
  IJsonPartlyRoute,
  IJsonPartlyRouteItem,
  IRecievedRouts,
} from '../trip-direction.model';
import { IRout } from '../trip-direction.model';

import { combineLatest } from 'rxjs';
import { throwError } from 'rxjs';
import { deepObjectClone } from '../helpers/deep-object-clone.helper';

@Injectable({ providedIn: 'root' })
export class RoutesDataService {
  constructor(private http: HttpClient, private cacheService: CacheService) {}

  getPathMap(
    startPoint: string,
    endPoint: string
  ): Observable<IRecievedRouts[]> {
    const startPointNumber = Number(startPoint);
    const endPointNumber = Number(endPoint);

    return forkJoin([
      this.getTravelData(startPointNumber, endPointNumber),
      this.getRouteTravelData(startPoint, endPoint, 'flying'),
      this.getRouteTravelData(startPoint, endPoint, 'fixed'),
      this.getRouteTravelData(startPoint, endPoint, 'mixed'),
    ]).pipe(
      map(([travelData, flyingData, groundData, mixedData]) => {
        const pathMap = [
          ...travelData,
          ...flyingData,
          ...groundData,
          ...mixedData,
        ];

        console.log('pathMap: ', pathMap);

        return pathMap;
      })
    );
  }

  async getTravelData(
    startPoint: number,
    endPoint: number
  ): Promise<IRecievedRouts[]> {
    console.time('RoutesDataService ~ getTravelData ~ GetTransportAndLocation');

    let subscribe = new Subscription();

    return new Promise(async resolve => {
      subscribe = combineLatest(
        this.cacheService.locations,
        this.cacheService.trasport,
        (locations, transportType) => ({ locations, transportType })
      ).subscribe(({ locations, transportType }) => {
        subscribe.unsubscribe();

        console.time('RoutesDataService ~ getTravelData');

        const result = this.getDirectRoutesByPoints(startPoint, endPoint).then(
          data => {
            if (data.length > 0) {
              console.log('getTravelData data:', data);

              let result: IRecievedRouts[] = [];

              for (let i = 0; i < data.length; i++) {
                result.push({
                  duration_minutes: data[i].duration,
                  euro_price: data[i].price,
                  routeType: 'direct_routes',
                  direct_paths: [
                    {
                      duration_minutes: String(data[i].duration),
                      euro_price: data[i].price,
                      from: locations[data[i].from].name,
                      to: locations[data[i].to].name,
                      transportation_type:
                        transportType[data[i].transport].name,
                    },
                  ],
                });
              }
              console.timeEnd('RoutesDataService ~ getTravelData');

              return result;
            }

            return [];
          }
        );

        resolve(result);
      });
    });
  }

  private async getRouteTravelData(
    startPoint: string,
    endPoint: string,
    type: 'flying' | 'fixed' | 'mixed'
  ): Promise<IRecievedRouts[]> {
    console.time(
      `trip-direction/data.service.ts ~ DataService ~ getRouteTravelData ${type}`
    );

    let subscribe = new Subscription();

    return new Promise(async resolve => {
      subscribe = combineLatest(
        this.cacheService.locations,
        this.cacheService.trasport,
        this.cacheService.directRoutes,
        (locations, transportType, directRoutes) => ({
          locations,
          transportType,
          directRoutes,
        })
      ).subscribe(({ locations, transportType, directRoutes }) => {
        if (directRoutes === null) return;

        const result = this.getRouteData(
          { startPoint, endPoint, type },
          directRoutes
        ).then(data => {
          const result: IRecievedRouts[] = [];

          console.log(
            '🚀 ~ file: routes-data.service.ts:136 ~ RoutesDataService ~ ).subscribe ~ data:',
            type,
            data
          );

          if (!data || data === null) return result;

          const directPaths: IRout[] = data.travel_data.map(travelData => ({
            duration_minutes: String(travelData.duration),
            euro_price: travelData.price,
            from: locations[travelData.from].name,
            to: locations[travelData.to].name,
            transportation_type: transportType[travelData.transport].name,
          }));

          result.push({
            duration_minutes: data.duration,
            euro_price: data.price,
            routeType: `${type}_routes`,
            direct_paths: directPaths,
          });

          console.log(result);
          return result;
        });

        console.timeEnd(
          `trip-direction/data.service.ts ~ DataService ~ getRouteTravelData ${type}`
        );

        resolve(result);

        subscribe.unsubscribe();
      });
    });
  }

  private async getDirectRoutesByPoints(
    startPoint: number,
    endPoint: number
  ): Promise<IJsonTravelData[]> {
    return new Promise(resolve => {
      let directRoutesSubscribe = new Subscription();

      directRoutesSubscribe = this.cacheService.directRoutes.subscribe(
        directRoutes => {
          if (directRoutes === null) return;

          console.time('RoutesDataService ~ getDirectRoutesByPoints');

          const directRoutesValues: IJsonTravelData[] =
            Object.values(directRoutes);

          const directRoutesForOutput: IJsonTravelData[] =
            directRoutesValues.filter(
              (el: IJsonTravelData) =>
                el.from === Number(startPoint) && el.to === Number(endPoint)
            );

          console.timeEnd('RoutesDataService ~ getDirectRoutesByPoints');

          directRoutesSubscribe.unsubscribe();

          resolve(directRoutesForOutput);
        }
      );
    });
  }

  private getRouteData(
    {
      startPoint,
      endPoint,
      type,
    }: {
      startPoint: string;
      endPoint: string;
      type: 'flying' | 'fixed' | 'mixed';
    },
    directRoutes: Record<number, IJsonTravelData>
  ): Promise<IJsonPartlyRouteItem | null> {
    console.time(
      `trip-direction/data.service.ts ~ DataService ~ getRouteData ~ ${type}`
    );

    const folderName = type === 'mixed' ? 'routes' : `${type}_routes`;
    const link = `assets/new_json/partly/${folderName}/${startPoint}.json`;

    const get = this.http.get<IJsonPartlyRoute>(link).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('error');

        if (error.status === 404) return Promise.reject();

        return throwError(
          () => new Error('Something bad happened; please try again later.')
        );
      })
    );

    return get
      .toPromise()
      .then((routes): IJsonPartlyRouteItem | undefined => {
        const route = routes[`${endPoint}`];
        if (route == undefined) return;

        const clonedRoute: IJsonPartlyRouteItem = deepObjectClone(route);

        clonedRoute.travel_data = this.getRouteInnerTravelData(
          clonedRoute.direct_routes,
          directRoutes
        );

        console.timeEnd(
          `trip-direction/data.service.ts ~ DataService ~ getRouteData ~ ${type}`
        );

        return clonedRoute;
      })
      .catch(() => {
        return null;
      });
  }

  private getRouteInnerTravelData(
    routeDirectRoutes: IJsonPartlyRouteItem['direct_routes'],
    directRoutes: Record<number, IJsonTravelData>
  ) {
    const pathData: IJsonTravelData[] = [];

    routeDirectRoutes.forEach((id: string): void => {
      const travelData = directRoutes[id];

      if (travelData !== undefined) {
        pathData.push(directRoutes[id]);
      }
    });

    return pathData;
  }
}