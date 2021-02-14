
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { IPath } from '../../service/http.service';


@Component({
  selector: 'app-path-details',
  templateUrl: './path-details.component.html',
  styleUrls: ['./path-details.component.scss'],
})
export class PathDetailsComponent implements OnInit {
@Input() paths: IPath[];
@Input() startPoint: string;
@Input() endPoint: string;

price: number;
  constructor() {}

  ngOnInit(): void {

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
        url = "http://bus.tutu.ru";
         break; 
      } 
      case "Train": { 
        //url = "http://gd.tickets.ua";
        url = "https://www.tutu.ru/poezda";
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

  openTransport (transport:string){
    //function for opening site of corresponding transportation type
     let url = this.getTransportUrl(transport);
    if (url!=''){
      // window.open(url, "_blank");
      window.open(url, "_blank");
    }
  }
}
