import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, forkJoin, Subscription } from 'rxjs';
import {
  IJsonTravelData,
  IJsonPartlyRoute,
  IJsonPartlyRouteItem,
  IRecievedRouts,
} from '../trip-direction.model';
import { HttpClient } from '@angular/common/http';
import { CacheService } from '../../service/cache.service';
import { IRout } from '../trip-direction.model';

@Injectable({ providedIn: 'root' })
export class RoutesDataService {
  constructor(private http: HttpClient, private cacheService: CacheService) {}

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

  async getTravelData(
    startPoint: number,
    endPoint: number
  ): Promise<IRecievedRouts[]> {
    console.time('RoutesDataService ~ getTravelData ~ GetTransportAndLocation');

    const transportType: {} = JSON.parse(
      sessionStorage.getItem('transportationTypes')
    );

    const locations: {} = JSON.parse(sessionStorage.getItem('locations'));

    console.timeEnd(
      'RoutesDataService ~ getTravelData ~ GetTransportAndLocation'
    );

    console.time('RoutesDataService ~ getTravelData');

    return this.getDirectRoutesByPoints(startPoint, endPoint).then(data => {
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
  ): Promise<IRecievedRouts[]> {
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
            const result: IRecievedRouts[] = [];

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
    directRoutes: Record<number, IJsonTravelData>
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

  private deepObjectClone<T extends Object>(value: T): T {
    return JSON.parse(JSON.stringify(value));
  }
}
