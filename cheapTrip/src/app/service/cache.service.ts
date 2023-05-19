import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { IJsonTravelData } from '../trip-direction/trip-direction.model';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  public loaded = new ReplaySubject<boolean>();
  public directRoutes = new ReplaySubject<Record<number, IJsonTravelData>>();
  public locations = new ReplaySubject<any>();
  public trasport = new ReplaySubject<any>();

  async initialize() {
    console.time('[Cache] CacheService initialize');

    await Promise.all([
      this.initializeDirectRoutes(),
      this.loadLocations(),
      this.loadTransport(),
    ]).then(() => {
      this.loaded.next(true);
    });

    console.timeEnd('[Cache] CacheService initialize');
  }

  private async initializeDirectRoutes() {
    const cache = await caches.open('fileCache');
    const response = await cache.match('direct_routes');

    if (response) {
      this.directRoutes.next(await response.json());

      return;
    }

    const newDirectRoutes = await this.loadDirectRoutes();

    this.log('Set cache direct_routes');

    await cache.put(
      'direct_routes',
      new Response(JSON.stringify(newDirectRoutes))
    );

    this.directRoutes.next(newDirectRoutes);
  }

  private async loadDirectRoutes() {
    const response = await fetch('assets/new_json/direct_routes.json');

    return await response.json();
  }

  private async loadLocations() {
    const response = await fetch('assets/new_json/locations.json');
    const responseJson = await response.json();

    sessionStorage.setItem('locations', JSON.stringify(responseJson));
    this.locations.next(responseJson);
  }

  private async loadTransport() {
    const response = await fetch('assets/new_json/transport.json');
    const responseJson = await response.json();

    sessionStorage.setItem('transportationTypes', JSON.stringify(responseJson));
    this.trasport.next(responseJson);
  }

  private log(...messages: unknown[]) {
    console.log(`[Cache]: `, ...messages);
  }
}
