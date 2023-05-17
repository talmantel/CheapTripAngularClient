import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, forkJoin, Subscription } from 'rxjs';
import {
  IJsonTravelData,
  IJsonPartlyRoute,
  IJsonPartlyRouteItem,
} from '../trip-direction.model';
import { HttpClient } from '@angular/common/http';
import { CacheService } from '../../service/cache.service';

@Injectable({ providedIn: 'root' })
export class RoutesDataService {
  constructor(private http: HttpClient, private cacheService: CacheService) {}

  async getFilterJson(
    startPoint: string,
    endPoint: string
  ): Promise<IJsonTravelData[]> {
    return new Promise(resolve => {
      console.time('RoutesDataService ~ getFilterJson');

      let directRoutesSubscribe = new Subscription();

      directRoutesSubscribe = this.cacheService.directRoutes.subscribe(
        directRoutes => {
          if (directRoutes === null) return;

          const objArray: IJsonTravelData[] = Object.values(directRoutes);
          const filterData: IJsonTravelData[] = objArray.filter(
            (el: IJsonTravelData) =>
              el.from === +startPoint && el.to === +endPoint
          );
          console.timeEnd('RoutesDataService ~ getFilterJson');

          directRoutesSubscribe.unsubscribe();

          resolve(filterData);
        }
      );
    });
  }

  async getTravelData({
    startPoint,
    endPoint,
  }: {
    startPoint: string;
    endPoint: string;
  }): Promise<any> {
    console.time('RoutesDataService ~ getTravelData ~ GetTransportAndLocation');
    const transportType: {} = JSON.parse(
      sessionStorage.getItem('transportationTypes')
    );
    const locations: {} = JSON.parse(sessionStorage.getItem('locations'));
    console.timeEnd(
      'RoutesDataService ~ getTravelData ~ GetTransportAndLocation'
    );

    console.time('RoutesDataService ~ getTravelData');

    return this.getFilterJson(startPoint, endPoint).then(data => {
      if (data.length > 0) {
        console.log('getTravelData data:', data);

        let result = [];

        for (let i = 0; i < data.length; i++) {
          result.push({
            duration_minutes: data[i].duration,
            euro_price: data[i].price,
            route_type: 'direct_routes',
            direct_paths: [
              {
                duration_minutes: data[i].duration,
                euro_price: +data[i].price,
                from: locations[data[i].from].name,
                to: locations[data[i].to].name,
                transportation_type: transportType[data[i].transport].name,
              },
            ],
          });
        }
        console.timeEnd('RoutesDataService ~ getTravelData');

        return result;
      }

      return [];
    });
  }

  getPathMap(startPoint: string, endPoint: string): Observable<any> {
    return forkJoin([
      this.getTravelData({ startPoint, endPoint }),
      this.getRouteTravelData(startPoint, endPoint, 'flying'),
      this.getRouteTravelData(startPoint, endPoint, 'fixed'),
      this.getRouteTravelData(startPoint, endPoint, 'direct'),
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

  private async getRouteTravelData(
    startPoint: string,
    endPoint: string,
    type: 'flying' | 'fixed' | 'direct'
  ): Promise<any[]> {
    console.time(
      `trip-direction/data.service.ts ~ DataService ~ getRouteTravelData ${type}`
    );

    const transportType: {} = JSON.parse(
      sessionStorage.getItem('transportationTypes')
    );

    const locations: {} = JSON.parse(sessionStorage.getItem('locations'));

    return new Promise(async resolve => {
      let directRoutesSubscribe = new Subscription();

      directRoutesSubscribe = this.cacheService.directRoutes.subscribe(
        directRoutes => {
          if (directRoutes === null) return;

          const result = this.getRouteData(
            { startPoint, endPoint, type },
            directRoutes
          ).then(data => {
            const result = [];

            if (!data || data === null) return result;

            const directPaths = data.travel_data.map(travelData => ({
              duration_minutes: travelData.duration,
              euro_price: travelData.price,
              from: locations[travelData.from].name,
              to: locations[travelData.to].name,
              transportation_type: transportType[travelData.transport].name,
            }));

            result.push({
              duration_minutes: data.duration,
              euro_price: data.price,
              route_type: `${type}_routes`,
              direct_paths: directPaths,
            });

            return result;
          });

          console.timeEnd(
            `trip-direction/data.service.ts ~ DataService ~ getRouteTravelData ${type}`
          );

          resolve(result);

          directRoutesSubscribe.unsubscribe();
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
      type: 'flying' | 'fixed' | 'direct';
    },
    directRoutes: any
  ): Promise<IJsonPartlyRouteItem | null> {
    console.time(
      `trip-direction/data.service.ts ~ DataService ~ getRouteData ~ ${type}`
    );
    return this.http
      .get<IJsonPartlyRoute>(
        `assets/new_json/partly/${type}_routes/${startPoint}.json`
      )
      .toPromise()
      .then((routes): IJsonPartlyRouteItem | undefined => {
        const route = routes[`${endPoint}`];
        if (route == undefined) return;

        const clonedRoute: IJsonPartlyRouteItem = this.deepObjectClone(route);

        clonedRoute.travel_data = this.getRouteInnerTravelData(
          clonedRoute.direct_routes,
          directRoutes
        );

        console.timeEnd(
          `trip-direction/data.service.ts ~ DataService ~ getRouteData ~ ${type}`
        );

        return clonedRoute;
      });
  }

  private getRouteInnerTravelData(
    routeDirectRoutes: IJsonPartlyRouteItem['direct_routes'],
    directRoutes: any
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

  private deepObjectClone<T extends Object>(value: T): T {
    return JSON.parse(JSON.stringify(value));
  }
}
