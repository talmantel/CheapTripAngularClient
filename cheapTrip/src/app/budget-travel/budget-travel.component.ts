import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { IPathPoint } from '../trip-direction/trip-direction.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


interface Cities {
  name: string;
  imageUrl: string;
  imageUrlW: string;
  description: string;
  facts: any[];
}

interface CityData {
  description: string;
  keywords: string;
  title: string;
  content: Content;
  eats: Eats;
  attractions: Attractions;
  tours: Tours;
  transportations: Transportations;
  routes: Routes;
}
interface Content {
  way: Way;
  city: City;
  accomodations: Accomodations;
}
interface Way {
  title: string;
  description: string;
  link: string;
}
interface City {
  title: string;
  description: string;
  images: any[];
}
interface Accomodations {
  description: string;
  options: Options[];
}
interface Options {
  name: string;
  description: string;
  locations: string;
}
interface Eats {
  description: string;
  options: Options[];
}
interface Attractions {
  description: string;
  options: Options[];
}
interface Tours {
  description: string;
  links: any[];
}
interface Transportations {
  description: string;
  links: any[];
}
interface Routes {
  title: string;
  description: string;
  pathes: Pathes;
}
interface Pathes {
  route: string;
  description: string;
  link: string;
}
@Component({
  selector: 'app-budget-travel',
  templateUrl: './budget-travel.component.html',
  styleUrls: ['./budget-travel.component.scss'],
})
export class BudgetTravelComponent implements OnInit {
  cityEndPoint: string;
  cityData: CityData;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  cities: Cities[] = [
    {
      name: 'Paris',
      imageUrl: 'assets/images/images_budget/paris.jpg',
      imageUrlW: 'assets/images/images_budget/paris.webp',
      description: 'Paris is the capital and most populous city of France.',
      facts: [
        'France Is the Most-Visited Country in the World',
        'France Is Smaller Than Texas',
        'France Has the Largest Art Museum.',
        'The French Eat 25,000 Tons of Snails Each Year.',
        'France Produces Over 1,500 Types of Cheese.',
        "Supermarkets in France Can't Throw Away Food.",
      ],
    },
    {
      name: 'London',
      imageUrl: 'assets/images/images_budget/london.jpg',
      imageUrlW: 'assets/images/images_budget/london.webp',
      description:
        ' Great Britain is an island in the North Atlantic Ocean off the north-west coast of continental Europe. With an area of 209,331 km2 (80,823 sq mi), it is the largest of the British Isles, the largest European island and the ninth-largest island in the world. It is dominated by a maritime climate with narrow temperature differences between seasons.',
      facts: [''],
    },
  ];

  selectedCity: City | null = null;

  onCityDetect(cityName: string): void {
    console.log('cityName father', cityName);
    this.cityEndPoint = cityName;
    this.getCityJson();
  }
  getCityJson() {
    return this.http
      .get(`../../assets/json_files/${this.cityEndPoint}.json`)
      .subscribe((data: CityData) => {
        this.cityData = data;
        console.log('this.cityData', this.cityData.description);
      });
  }
}
