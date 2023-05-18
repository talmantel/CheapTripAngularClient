import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { IJsonTravelData } from '../trip-direction/trip-direction.model';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  public directRoutes = new ReplaySubject<Record<number, IJsonTravelData>>();

  async initialize() {
    console.time('[Cache] CacheService initialize');

    const cache = await caches.open('fileCache');
    const response = await cache.match('direct_routes');

    if (response) {
      this.log('Cache found!');
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

    console.timeEnd('[Cache] CacheService initialize');
  }

  private async loadDirectRoutes() {
    const response = await fetch('assets/new_json/direct_routes.json');

    return await response.json();
  }

  private log(...messages: unknown[]) {
    console.log(`[Cache]: `, ...messages);
  }
}
