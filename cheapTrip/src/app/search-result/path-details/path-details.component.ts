
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { IPath } from '../../service/http.service';
import { HttpService } from 'src/app/service/http.service';
import { GlobalService } from 'src/app/global/global.service';
import { Currency } from 'src/app/currency-selector/currency-selector.component';
import {ILocation, IRout, IRoute} from 'src/app/trip-direction/trip-direction.model';

const TRANSPORT = new Map();
TRANSPORT.set('Bus', $localize`Bus`);
TRANSPORT.set('Flight', $localize`Flight`);
TRANSPORT.set('Train',$localize`Train`);
TRANSPORT.set('Ride Share',$localize`Ride Share`);
TRANSPORT.set('Car Drive',$localize`Car Drive`);
TRANSPORT.set('Walk',$localize`Walk`);
TRANSPORT.set('Town Car', $localize`Town Car`);
TRANSPORT.set('Car Ferry',$localize`:@@CarFerry:Car Ferry`);  // two variants for ferry
TRANSPORT.set('Ferry', $localize`:@@CarFerry:Car Ferry`);      //
TRANSPORT.set('Shuttle', $localize`Shuttle`);
TRANSPORT.set('Taxi', $localize`Taxi`);

@Component({
  selector: 'app-path-details',
  templateUrl: './path-details.component.html',
  styleUrls: ['./path-details.component.scss'],
})



export class PathDetailsComponent implements OnInit {
@Input() path: IRoute;
@Input() startPoint: ILocation;
@Input() endPoint: ILocation;

private country:string;
//private currency:Currency;



price: number;
  constructor(private httpService: HttpService,
              private globalService: GlobalService
    ) {


   //  this.httpService.getUserCountry().subscribe({
   //    next: (data:any)=>{console.log("Got user country:"+data.country_code);
   //      this.country= data.country_code},
   //    // error: (err:any)=>{console.log(err);
   //    //   this.country= "undefined"}
   // })


  }




  ngOnInit(): void {
    // this.currency = this.globalService.getCurrency();
  }

  getGlobalCurrency(){
    return this.globalService.getCurrency();
  }

  getTransportName(transport:string) {
    return TRANSPORT.get(transport);
  }


  getTransportUrl (rout:IRout){
    let url:string='';

    switch(rout.transportation_type) {
      case "Flight": {
        //url = "http://Skyscanner.com";
        url= this.getSkyScannerUrl(rout);
         break;
      }
      case "Bus": {
        //url = "http://bus.tickets.ua";
        url=this.getBusUrl(rout);
         break;
      }
      case "Train": {
        //url = "http://gd.tickets.ua";
         url=this.getTrainUrl(rout);
        //url = "https://www.tutu.ru/poezda";
        break;
      }
      case "Car Ferry": {
        url = "http://www.aferry.com";
         break;
      }
      case "Ferry": {
        url = "http://www.aferry.com";
         break;
      }
       case "Ride Share": {
        url = "http://BlaBlaCar.com";
         break;
      }
      default: {
         url='';
         break;
      }
   }
   return url;
  }
  getBusUrl(rout :IRout){
    // console.log ("bus "+this.country);
    // if((from == 545 OR to == 545) AND (transportation_type == 2))
    // console.log("bus new "+JSON.stringify(rout));
    if (rout.from=="Донецк"||rout.from=="Donetsk"||
    rout.to=="Донецк"||rout.to=="Donetsk"  ){
      //right way is to use ID of city, but current server is not build for that
      return "http://bustravel.dn.ua/";
    }
    switch(this.country){
      case "RU":
      case "BY":

        return "http://bus.tutu.ru";
      case "IN":
        return "https://www.makemytrip.com/bus-tickets/";
      case "UA":
      default:
        return "https://omio.sjv.io/XxEWmb";
    }
  }

  getTrainUrl(rout:IRout){
    console.log ("train "+this.country);
    switch(this.country){

      case "RU":
      case "BY":

        return "https://www.tutu.ru/poezda";
      case "IN":
        return "https://www.makemytrip.com/railways/";
      case "UA":
      default:
        return "https://omio.sjv.io/XxEWmb";
    }
  }

  openTransport (rout: IRout){
    //function for opening site of corresponding transportation type
     let url = this.getTransportUrl(rout);
    if (url!=''){
      window.open(url, "_blank");
    }
  }
  getSkyScannerUrl (rout:IRout){
let from=this.httpService.getSkyScannerCode(rout.from);

let to = this.httpService.getSkyScannerCode(rout.to);

      if (from==""||to==""){
      return "http://Skyscanner.com";
      }
      return "http://Skyscanner.com/transport/flights/"+from+"/"+to;

  }
}

