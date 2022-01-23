import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { IPath } from '../../service/http.service';
import { HttpService } from 'src/app/service/http.service';
import { IRout } from 'src/app/trip-direction/trip-direction.model';

const TRANSPORT = new Map();
TRANSPORT.set('Bus', 'Bus');
TRANSPORT.set('Flight', 'Flight');
TRANSPORT.set('Train', 'Train');
TRANSPORT.set('Ride Share', 'Ride Share');
TRANSPORT.set('Car Drive', 'Car Drive');
TRANSPORT.set('Walk', 'Walk');
TRANSPORT.set('Town Car', 'Town Car');
TRANSPORT.set('Car Ferry', 'Car Ferry'); // two variants for ferry
TRANSPORT.set('Ferry', 'Car Ferry'); //
TRANSPORT.set('Shuttle', 'Shuttle');
TRANSPORT.set('Taxi', 'Taxi');

@Component({
  selector: 'app-path-details',
  templateUrl: './path-details.component.html',
  styleUrls: ['./path-details.component.scss'],
})
export class PathDetailsComponent implements OnInit {
  @Input() paths: IPath[];
  @Input() startPoint: string;
  @Input() endPoint: string;
  private country: string;

  price: number;


  constructor(private httpService: HttpService) {
    this.httpService.getUserCountry().subscribe({
      next: (data: any) => {
        console.log('Got user country:' + data.country_code);
        this.country = data.country_code;
      },
      error: (err: any) => {
        console.log(err);
        this.country = 'undefined';
      },
    });
  }

  ngOnInit(): void {
  }

  getTransportName(transport: string) {
    return TRANSPORT.get(transport);
  }

  getTransportUrl(rout: IRout) {
    let url: string = '';

    switch (rout.transportation_type) {
      case 'Flight': {
        //url = "http://Skyscanner.com";
        url = this.getSkyScannerUrl(rout);
        break;
      }
      case 'Bus': {
        //url = "http://bus.tickets.ua";
        url = this.getBusUrl(rout);
        break;
      }
      case 'Train': {
        //url = "http://gd.tickets.ua";
        url = this.getTrainUrl();
        //url = "https://www.tutu.ru/poezda";
        break;
      }
      case 'Car Ferry': {
        url = 'http://www.aferry.com';
        break;
      }
      case 'Ferry': {
        url = 'http://www.aferry.com';
        break;
      }
      case 'Ride Share': {
        url = 'http://BlaBlaCar.com';
        break;
      }
      default: {
        url = '';
        break;
      }
    }
    return url;
  }

  getBusUrl(rout: IRout) {
    // console.log ("bus "+this.country);
    // if((from == 545 OR to == 545) AND (transportation_type == 2))
    // console.log("bus new "+JSON.stringify(rout));
    if (
      rout.from == 'Донецк' ||
      rout.from == 'Donetsk' ||
      rout.to == 'Донецк' ||
      rout.to == 'Donetsk'
    ) {
      //right way is to use ID of city, but current server is not build for that
      return 'http://bustravel.dn.ua/';
    }
    switch (this.country) {
      case 'RU':
      case 'BY':
      case 'UA':
        return 'http://bus.tutu.ru';
      case 'IN':
        return 'https://www.makemytrip.com/bus-tickets/';
      default:
        return 'http://www.omio.com';
    }
  }

  getTrainUrl() {
    console.log('train ' + this.country);
    switch (this.country) {
      case 'RU':
      case 'BY':
      case 'UA':
        return 'https://www.tutu.ru/poezda';
      case 'IN':
        return 'https://www.makemytrip.com/railways/';
      default:
        return 'http://www.omio.com';
    }
  }

  openTransport(rout: IRout) {
    //function for opening site of corresponding transportation type
    let url = this.getTransportUrl(rout);
    if (url != '') {
      window.open(url, '_blank');
    }
  }

  getSkyScannerUrl(rout: IRout) {
    let from = this.httpService.getSkyScannerCode(rout.from);

    let to = this.httpService.getSkyScannerCode(rout.to);

    if (from == '' || to == '') {
      return 'http://Skyscanner.com';
    }
    return 'http://Skyscanner.com/transport/flights/' + from + '/' + to;
  }
}
