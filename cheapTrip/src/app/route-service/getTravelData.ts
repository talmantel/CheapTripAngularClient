import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { of, Observable, forkJoin } from 'rxjs';
import {
  IJsonTravelData,
  IJsonRoutData,
  IRecievedRouts,
} from '../trip-direction/trip-direction.model';
import { FlyingRoutesService } from './flying-routes.service';
import { GroundRoutesService } from './ground-routes.service';
import { MixedRoutesService } from './mixed-routes.service';

@Injectable({ providedIn: 'root' })
export class DataService {
  // private mergedData: IJsonTravelData[];
  constructor(
    private flyingData: FlyingRoutesService,
    private groundData: GroundRoutesService,
    private mixedData: MixedRoutesService
  ) {}

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
        console.log(data);
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
      } else {
        return [];
      }
    });
  }

  getPathMap(startPoint: string, endPoint: string): Observable<any> {
    return forkJoin([
      this.getTravelData({ startPoint, endPoint }),
      this.flyingData.getTravelData(startPoint, endPoint),
      this.groundData.getTravelData(startPoint, endPoint),
      this.mixedData.getTravelData(startPoint, endPoint),
    ]).pipe(
      map(([travelData, flyingData, groundData, mixedData]) => {
        const pathMap = [
          ...travelData,
          ...flyingData,
          ...groundData,
          ...mixedData,
        ];
        console.log(pathMap);
        return pathMap;
      })
    );
  }
}
