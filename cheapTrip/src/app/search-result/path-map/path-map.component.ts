import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';


@Component({
  selector: 'app-path-map',
  templateUrl: './path-map.component.html',
  styleUrls: ['./path-map.component.scss'],
})
export class PathMapComponent implements OnInit {
  
  map;
  constructor() {
  }

  ngOnInit() {
    this.initilizeMap();
  }
  
  initilizeMap(){

  this.map = new Map({
    target: 'map',
    layers: [
      new TileLayer({
        source: new OSM()
        })
    ],
    view: new View({
      center: [3873409.21,3774876.34],
      zoom: 10
    })
  });
}
}
