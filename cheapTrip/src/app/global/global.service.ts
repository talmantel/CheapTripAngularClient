import { Injectable } from '@angular/core';
import { Currency } from '../currency-selector/currency-selector.component';

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
