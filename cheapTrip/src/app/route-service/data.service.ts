import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, forkJoin } from 'rxjs';
import {
  IJsonTravelData,
  IJsonPartlyRoute,
  IJsonPartlyRouteItem,
} from '../trip-direction/trip-direction.model';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) {}

  async getFilterJson(
    startPoint: string,
    endPoint: string
  ): Promise<IJsonTravelData[]> {
    console.time('-------------------------- Travel_data');
    return caches
      .match(new Request('direct_routes'))
      .then(response => {
        if (response) {
          return response.json();
        }
      })
      .then(data => {
        const objArray: IJsonTravelData[] = Object.values(data);
        const filterData: IJsonTravelData[] = objArray.filter(
          (el: IJsonTravelData) =>
            el.from === +startPoint && el.to === +endPoint
        );
        console.timeEnd('-------------------------- Travel_data');

        return filterData;
      });
  }

  async getTravelData({
    startPoint,
    endPoint,
  }: {
    startPoint: string;
    endPoint: string;
  }): Promise<any> {
    console.time('GetTransportAndLocation');
    const transportType: {} = JSON.parse(
      sessionStorage.getItem('transportationTypes')
    );
    const locations: {} = JSON.parse(sessionStorage.getItem('locations'));
    console.timeEnd('GetTransportAndLocation');

    console.time('GetFilterJson Travel_data');

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
        console.timeEnd('GetFilterJson Travel_data');

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

  private getRouteTravelData(
    startPoint: string,
    endPoint: string,
    type: 'flying' | 'fixed' | 'direct'
  ) {
    console.time(
      'route-service/data.service.ts ~ DataService ~ getRouteTravelData'
    );

    const transportType: {} = JSON.parse(
      sessionStorage.getItem('transportationTypes')
    );

    const locations: {} = JSON.parse(sessionStorage.getItem('locations'));

    console.timeEnd(
      'route-service/data.service.ts ~ DataService ~ getRouteTravelData'
    );

    return this.getRouteData({ startPoint, endPoint, type }).then(data => {
      console.log(
        'route-service/data.service.ts ~ DataService ~ getRouteTravelData ~ data:',
        data
      );

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
  }

  private getRouteData({
    startPoint,
    endPoint,
    type,
  }: {
    startPoint: string;
    endPoint: string;
    type: 'flying' | 'fixed' | 'direct';
  }): Promise<IJsonPartlyRouteItem | null> {
    console.log('getRouteData, type: ', type);

    const pathData: IJsonTravelData[] = [];

    console.time('route-service/data.service.ts ~ DataService ~ getRouteData');

    return this.http
      .get<IJsonPartlyRoute>(
        `assets/new_json/partly/${type}_routes/${startPoint}.json`
      )
      .toPromise()
      .then((routes): Promise<IJsonPartlyRouteItem | null> => {
        const routeWithLink = routes[`${endPoint}`];

        if (routeWithLink == undefined) {
          return null;
        }

        const filterData: IJsonPartlyRouteItem = JSON.parse(
          JSON.stringify(routes[`${endPoint}`])
        );

        return caches.match('direct_routes').then(response => {
          if (response) {
            return response.json().then(data => {
              filterData.direct_routes.forEach((id: string): void => {
                const travelData = data[id];

                if (travelData !== undefined) {
                  pathData.push(data[id]);
                }
              });

              filterData.travel_data = pathData;

              console.timeEnd(
                'route-service/data.service.ts ~ DataService ~ getRouteData'
              );

              return filterData;
            });
          }

          console.error(`caches.match('direct_routes') error`);
          return null;
        });
      })
      .catch(error => {
        console.error(`Error ${type}`, error);

        return null;
      });
  }
}
