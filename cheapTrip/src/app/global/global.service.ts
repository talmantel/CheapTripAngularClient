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
    this.setCurrencyToLocalStorage();
  }

  setCurrencyToLocalStorage(){
    localStorage.setItem('currency',this.currency.code);
  }

  getCurrencyFromLocalStorage(){
    console.log("Local stored currency "+localStorage.getItem('currency'));
    return localStorage.getItem('currency');//null if none present
  }
}
