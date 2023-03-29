// import { Injectable } from '@angular/core';
// import { map } from 'rxjs/operators';
// import { of, Observable, forkJoin } from 'rxjs';
// import {
//   IJsonTravelData,
//   IJsonRoutData,
//   IRecievedRouts,
// } from '../trip-direction/trip-direction.model';

// @Injectable({ providedIn: 'root' })
// export class DataServiceNew {
//   private transportType: {};
//   private locations: {};
//   private directRoutes: {};

//   constructor() {
//     this.transportType = JSON.parse(
//       sessionStorage.getItem('transportationTypes')
//     );
//     this.locations = JSON.parse(sessionStorage.getItem('locations'));
//     this.directRoutes = {};

//     // вызываем инициализацию при создании экземпляра класса
//     this.initDirectRoutes();
//   }
//   async initDirectRoutes() {
//     try {
//       if (Object.keys(this.directRoutes).length === 0) {
//         // проверка, что объект не пустой
//         const response = await caches.match(
//           new Request('assets/new_json/direct_routes.json')
//         );
//         const data = await response.json();
//         this.directRoutes = data;
//         console.log('Direct routes initialized');
//       }
//     } catch (err) {
//       console.error('Error initializing direct routes', err);
//     }
//   }

//   getGroundFilterJson({
//     startPoint,
//     endPoint,
//   }: {
//     startPoint: string;
//     endPoint: string;
//   }): Promise<any> {
//     const pathData: IJsonTravelData[] = [];
//     console.time('Get_Ground_Routes');
//     return caches
//       .match(new Request('assets/new_json/fixed_routes.json'))
//       .then(response => {
//         if (response) {
//           return response.json();
//         }
//       })
//       .then(fixedData => {
//         console.timeEnd('Get_Ground_Routes');

//         const filterData = fixedData[`${startPoint}0${endPoint}`];
//         if (!filterData) return [];
//         const path = filterData.direct_routes.split(',');
//         path.forEach((id: string): void => {
//           pathData.push(this.directRoutes[id]);
//         });
//         filterData.travel_data = pathData;

//         return filterData;
//       });
//   }

//   async getGroundData(startPoint: string, endPoint: string): Promise<any> {
//     // return [];

//     console.time('Ground-Routes');

//     return this.getGroundFilterJson({ startPoint, endPoint }).then(data => {
//       if (data.length !== 0) {
//         const result = [];
//         const directPaths = data.travel_data.map(el => ({
//           duration_minutes: el.duration,
//           euro_price: el.price,
//           from: this.locations[el.from].name,
//           to: this.locations[el.to].name,
//           transportation_type: this.transportType[el.transport].name,
//         }));
//         result.push({
//           duration_minutes: data.duration,
//           euro_price: data.price,
//           route_type: 'ground_routes',
//           direct_paths: directPaths,
//         });
//         console.timeEnd('Ground-Routes');

//         return result;
//       } else {
//         return [];
//       }
//     });
//   }

//   async getDirectFilterJson(
//     startPoint: string,
//     endPoint: string
//   ): Promise<IJsonTravelData[]> {
//     console.time('-------------------------- Travel_data');

//     const objArray: IJsonTravelData[] = Object.values(this.directRoutes);
//     const filterData: IJsonTravelData[] = objArray.filter(
//       (el: IJsonTravelData) => el.from === +startPoint && el.to === +endPoint
//     );
//     console.timeEnd('-------------------------- Travel_data');
//     console.log(filterData);
//     return filterData;
//   }

//   async getDirectData({
//     startPoint,
//     endPoint,
//   }: {
//     startPoint: string;
//     endPoint: string;
//   }): Promise<any> {
//     // console.time('GetTransportAndLocation');
//     // const transportType: {} = JSON.parse(
//     //   sessionStorage.getItem('transportationTypes')
//     // );
//     // const locations: {} = JSON.parse(sessionStorage.getItem('locations'));
//     // console.timeEnd('GetTransportAndLocation');

//     console.time('GetFilterJson Travel_data');

//     return this.getDirectFilterJson(startPoint, endPoint).then(data => {
//       if (data.length > 0) {
//         console.log(data);
//         let result = [];
//         for (let i = 0; i < data.length; i++) {
//           result.push({
//             duration_minutes: data[i].duration,
//             euro_price: data[i].price,
//             route_type: 'direct_routes',
//             direct_paths: [
//               {
//                 duration_minutes: data[i].duration,
//                 euro_price: +data[i].price,
//                 from: this.locations[data[i].from].name,
//                 to: this.locations[data[i].to].name,
//                 transportation_type: this.transportType[data[i].transport].name,
//               },
//             ],
//           });
//         }
//         console.timeEnd('GetFilterJson Travel_data');

//         return result;
//       } else {
//         return [];
//       }
//     });
//   }

//   getFlyingFilterJson({
//     startPoint,
//     endPoint,
//   }: {
//     startPoint: string;
//     endPoint: string;
//   }): Promise<any> {
//     const pathData: IJsonTravelData[] = [];
//     console.time('GetFilterJson Flying_Data');

//     return caches
//       .match(new Request('assets/new_json/flying_routes.json'))
//       .then(response => {
//         if (response) {
//           return response.json();
//         }
//       })
//       .then(flyingData => {
//         const filterData = flyingData[`${startPoint}0${endPoint}`];

//         if (!filterData) return [];
//         const path: [] = filterData.direct_routes.split(',');
//         return caches
//           .match(new Request('assets/new_json/direct_routes.json'))
//           .then(response => {
//             if (response) {
//               return response.json();
//             }
//           })
//           .then(data => {
//             // console.log(data);
//             path.forEach((id: string): void => {
//               pathData.push(data[id]);
//             });
//             filterData.travel_data = pathData;
//             console.timeEnd('GetFilterJson Flying_Data');

//             return filterData;
//           });
//       });
//   }

//   async getFlyingData(startPoint: string, endPoint: string): Promise<any> {
//     // return [];
//     console.time('GetTransportAndLocationFlying');
//     const transportType: {} = JSON.parse(
//       sessionStorage.getItem('transportationTypes')
//     );
//     const locations: {} = JSON.parse(sessionStorage.getItem('locations'));
//     console.timeEnd('GetTransportAndLocationFlying');

//     return this.getFlyingFilterJson({ startPoint, endPoint }).then(data => {
//       if (data.length !== 0) {
//         const result = [];

//         const directPaths = data.travel_data.map(el => ({
//           duration_minutes: el.duration,
//           euro_price: el.price,
//           from: locations[el.from].name,
//           to: locations[el.to].name,
//           transportation_type: transportType[el.transport].name,
//         }));
//         result.push({
//           duration_minutes: data.duration,
//           euro_price: data.price,
//           route_type: 'flying_routes',
//           direct_paths: directPaths,
//         });

//         return result;
//       } else {
//         return [];
//       }
//     });
//   }

//   getMixedFilterJson({
//     startPoint,
//     endPoint,
//   }: {
//     startPoint: string;
//     endPoint: string;
//   }): Promise<any> {
//     const pathData: IJsonTravelData[] = [];

//     return caches
//       .match(new Request('assets/new_json/routes.json'))
//       .then(response => {
//         if (response) {
//           return response.json();
//         }
//       })
//       .then(mixedData => {
//         const filterData = mixedData[`${startPoint}0${endPoint}`];
//         if (!filterData) return [];
//         const paths = filterData.direct_routes.split(',');
//         return caches
//           .match(new Request('assets/new_json/direct_routes.json'))
//           .then(response => {
//             if (response) {
//               return response.json();
//             }
//           })
//           .then(data => {
//             paths.forEach((id: string): void => {
//               pathData.push(data[id]);
//             });
//             filterData.travel_data = pathData;
//             return filterData;
//           });
//       });
//   }

//   async getMixedlData(startPoint: string, endPoint: string): Promise<any> {
//     const transportType: {} = JSON.parse(
//       sessionStorage.getItem('transportationTypes')
//     );
//     const locations: {} = JSON.parse(sessionStorage.getItem('locations'));
//     console.time('Get_Mixed_Routes');

//     return this.getMixedFilterJson({ startPoint, endPoint }).then(data => {
//       if (data.length !== 0) {
//         const result = [];

//         const directPaths = data.travel_data.map(el => ({
//           duration_minutes: el.duration,
//           euro_price: el.price,
//           from: locations[el.from].name,
//           to: locations[el.to].name,
//           transportation_type: transportType[el.transport].name,
//         }));
//         result.push({
//           duration_minutes: data.duration,
//           euro_price: data.price,
//           route_type: 'mixed_routes',
//           direct_paths: directPaths,
//         });

//         console.timeEnd('Get_Mixed_Routes');

//         return result;
//       } else {
//         return [];
//       }
//     });
//   }

//   getPathMap(startPoint: string, endPoint: string): Observable<any> {
//     if (Object.keys(this.directRoutes).length !== 0)
//       return forkJoin([
//         this.getDirectData({ startPoint, endPoint }),
//         this.getFlyingData(startPoint, endPoint),
//         this.getGroundData(startPoint, endPoint),
//         this.getMixedlData(startPoint, endPoint),
//       ]).pipe(
//         map(([travelData, flyingData, groundData, mixedData]) => {
//           const pathMap = [
//             ...travelData,
//             ...flyingData,
//             ...groundData,
//             ...mixedData,
//           ];
//           console.log(pathMap);
//           return pathMap;
//         })
//       );
//   }
// }
