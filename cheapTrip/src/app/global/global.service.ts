import { Injectable } from '@angular/core';
import { Currency } from '../trip-direction/select-direction/select-direction.component';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  currency:Currency;

  constructor() { }

  getCurrency(){
    return this.currency;
  }

  setCurrency(currency:Currency){
    this.currency=currency;
  }
}
