import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TripDirectionHelpersService {
  deepObjectClone<T extends Object>(value: T): T {
    return JSON.parse(JSON.stringify(value));
  }
}
