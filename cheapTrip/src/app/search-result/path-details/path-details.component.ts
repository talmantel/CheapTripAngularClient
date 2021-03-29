
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { IPath } from '../../service/http.service';
import { HttpService } from 'src/app/service/http.service';

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
@Input() paths: IPath[];
@Input() startPoint: string;
@Input() endPoint: string;
private country:string;



price: number;
  constructor(private httpService: HttpService) {


    this.httpService.getUserCountry().subscribe({
      next: (data:any)=>{console.log("Got user country:"+data.country_code);
        this.country= data.country_code},
      error: (err:any)=>{console.log(err);
        this.country= "undefined"}
   })


  }




  ngOnInit(): void {
    
  }

  getTransportName(transport:string) {
    return TRANSPORT.get(transport);
  }


  getTransportUrl (transport:string){
    let url:string='';
    switch(transport) { 
      case "Flight": { 
        url = "http://Skyscanner.com";
         break; 
      } 
      case "Bus": { 
        //url = "http://bus.tickets.ua";
        url=this.getBusUrl();
         break; 
      } 
      case "Train": { 
        //url = "http://gd.tickets.ua";
         url=this.getTrainUrl();
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
  getBusUrl(){
    console.log ("bus "+this.country);
    switch(this.country){
      case "RU":
      case "BY":
      case "UA":
        return "http://bus.tutu.ru";
      case "IN":
        return "https://www.makemytrip.com/bus-tickets/";
      default:
        return "http://www.omio.com";
    }
  }

  getTrainUrl(){
    console.log ("train "+this.country);
    switch(this.country){
      
      case "RU":
      case "BY":
      case "UA":
        return "https://www.tutu.ru/poezda";
      case "IN":
        return "https://www.makemytrip.com/railways/";
      default:
        return "http://www.omio.com";
    }
  }

  openTransport (transport:string){
    //function for opening site of corresponding transportation type
     let url = this.getTransportUrl(transport);
    if (url!=''){
      // window.open(url, "_blank");
      window.open(url, "_blank");
    }
  }
}
