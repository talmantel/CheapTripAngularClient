import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('LOGOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO');
    console.time('location.json');

    fetch('assets/new_json/locations.json')
      .then(res => res.json())
      .then(data => {
        const newData = {};
        Object.keys(data).forEach(key => {
          newData[data[key].id] = data[key];
        });
        sessionStorage.setItem('locations', JSON.stringify(newData));
      });
    console.timeEnd('location.json');
    console.time('Transport.json');

    fetch('assets/new_json/transport.json')
      .then(res => res.json())
      .then(data =>
        sessionStorage.setItem('transportationTypes', JSON.stringify(data))
      );
    console.timeEnd('Transport.json');

    console.time('Travel_data.json');
    caches.open('fileCache').then(cache => {
      cache.add('assets/new_json/direct_routes.json');
      console.timeEnd('Travel_data.json');
    });
    console.time('Flying_data.json');
    caches.open('fileCache').then(cache => {
      cache.add('assets/new_json/flying_routes.json');
    });
    console.timeEnd('Flying_data.json');
    console.time('Fixed_data.json');
    caches.open('fileCache').then(cache => {
      cache.add('assets/new_json/fixed_routes.json');
    });
    console.timeEnd('Fixed_data.json');
    console.time('Mixed_data.json');
    caches.open('fileCache').then(cache => {
      cache.add('assets/new_json/routes.json');
    });
    console.timeEnd('Mixed_data.json');
  }
}
