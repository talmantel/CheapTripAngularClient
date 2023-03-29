import { Injectable } from '@angular/core';
import {
  IJsonTravelData,
  IJsonRoutData,
} from '../trip-direction/trip-direction.model';

@Injectable({
  providedIn: 'root',
})
export class GroundRoutes {
  constructor() {}

  getFilterJson({
    startPoint,
    endPoint,
  }: {
    startPoint: string;
    endPoint: string;
  }): Promise<any> {
    const pathData: IJsonTravelData[] = [];
    console.time('Get_Ground_Routes');
    return caches
      .match(new Request('assets/new_json/fixed_routes.json'))
      .then(response => {
        if (response) {
          return response.json();
        }
      })
      .then(fixedData => {
        console.timeEnd('Get_Ground_Routes');

        const filterData = fixedData[`${startPoint}0${endPoint}`];
        if (!filterData) return [];
        const path = filterData.direct_routes.split(',');
        return caches
          .match(new Request('assets/new_json/direct_routes.json'))
          .then(response => {
            if (response) {
              return response.json();
            }
          })
          .then(data => {
            path.forEach((id: string): void => {
              pathData.push(data[id]);
            });
            filterData.travel_data = pathData;

            return filterData;
          });
      });
  }

  async getTravelData(startPoint: string, endPoint: string): Promise<any> {
    const transportType: {} = JSON.parse(
      sessionStorage.getItem('transportationTypes')
    );
    console.time('Location');

    const locations: {} = JSON.parse(sessionStorage.getItem('locations'));
    console.timeEnd('Location');
    console.time('Ground-Routes');

    return this.getFilterJson({ startPoint, endPoint }).then(data => {
      if (data.length !== 0) {
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
          route_type: 'ground_routes',
          direct_paths: directPaths,
        });
        console.timeEnd('Ground-Routes');

        return result;
      } else {
        return [];
      }
    });
  }
}
