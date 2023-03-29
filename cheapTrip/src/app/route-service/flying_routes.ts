import { Injectable } from '@angular/core';
import {
  IJsonTravelData,
  IJsonRoutData,
} from '../trip-direction/trip-direction.model';

@Injectable({
  providedIn: 'root',
})
export class FlyingRoutes {
  // pathData: IJsonTravelData[];

  constructor() {}

  getFilterJson({
    startPoint,
    endPoint,
  }: {
    startPoint: string;
    endPoint: string;
  }): Promise<any> {
    const pathData: IJsonTravelData[] = [];
    console.time('GetFilterJson Flying_Data');

    return caches
      .match(new Request('assets/new_json/flying_routes.json'))
      .then(response => {
        if (response) {
          return response.json();
        }
      })
      .then(flyingData => {
        const filterData = flyingData[`${startPoint}0${endPoint}`];

        if (!filterData) return [];
        const path: [] = filterData.direct_routes.split(',');
        return caches
          .match(new Request('assets/new_json/direct_routes.json'))
          .then(response => {
            if (response) {
              return response.json();
            }
          })
          .then(data => {
            // console.log(data);
            path.forEach((id: string): void => {
              pathData.push(data[id]);
            });
            filterData.travel_data = pathData;
            console.timeEnd('GetFilterJson Flying_Data');

            return filterData;
          });
      });
  }

  async getTravelData(startPoint: string, endPoint: string): Promise<any> {
    // return [];
    console.time('GetTransportAndLocationFlying');
    const transportType: {} = JSON.parse(
      sessionStorage.getItem('transportationTypes')
    );
    const locations: {} = JSON.parse(sessionStorage.getItem('locations'));
    console.timeEnd('GetTransportAndLocationFlying');

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
          route_type: 'flying_routes',
          direct_paths: directPaths,
        });

        return result;
      } else {
        return [];
      }
    });
  }
}
