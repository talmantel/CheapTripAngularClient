import { Injectable } from '@angular/core';
import {
  IJsonTravelData,
  IJsonPartlyRoute,
  IJsonPartlyRouteItem,
} from '../trip-direction/trip-direction.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MixedRoutesService {
  constructor(private http: HttpClient) {}

  getFilterJson({
    startPoint,
    endPoint,
  }: {
    startPoint: string;
    endPoint: string;
  }): Promise<IJsonPartlyRouteItem | null> {
    const pathData: IJsonTravelData[] = [];
    const JSON_FOLDER_NAME = 'json';
    console.time('GetFilterJson Mixed_Data');

    return this.http
      .get<IJsonPartlyRoute>(
        `assets/${JSON_FOLDER_NAME}/partly/routes/${startPoint}.json`
      )
      .toPromise<IJsonPartlyRoute>()
      .then((flyingData): Promise<IJsonPartlyRouteItem | null> => {
        const filterData = flyingData[`${endPoint}`];
        if (!filterData) return null;

        const path: string[] = filterData.direct_routes;

        return caches.match('direct_routes').then(response => {
          if (response) {
            return response.json().then(data => {
              path.forEach((id: string): void => {
                pathData.push(data[id]);
              });

              filterData.travel_data = pathData;
              console.timeEnd('GetFilterJson Mixed_Data');

              return filterData;
            });
          }
        });

        return null;
      })
      .catch(error => {
        console.error('Error:', error);
        return null;
      });
  }

  async getTravelData(startPoint: string, endPoint: string): Promise<any> {
    const transportType: {} = JSON.parse(
      sessionStorage.getItem('transportationTypes')
    );
    const locations: {} = JSON.parse(sessionStorage.getItem('locations'));
    console.time('Get_Mixed_Routes');

    return this.getFilterJson({ startPoint, endPoint }).then(data => {
      if (data !== null) {
        const result = [];

        const directPaths = data.travel_data.map(el => ({
          duration_minutes: el.duration,
          euro_price: el.price,
          from: locations[el.from].name,
          to: locations[el.to].name,
          transportation_type: transportType[el.transport].name,
        }));
        result.push({
          duration_minutes: data.duration,
          euro_price: data.price,
          route_type: 'mixed_routes',
          direct_paths: directPaths,
        });

        console.timeEnd('Get_Mixed_Routes');

        return result;
      } else {
        return [];
      }
    });
  }
}
