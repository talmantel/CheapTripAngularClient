import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

interface City {
  name: string;
  imageUrl: string;
  imageUrlW: string;
  description: string;
  facts: any[];
}

@Component({
  selector: 'app-budget-travel',
  templateUrl: './budget-travel.component.html',
  styleUrls: ['./budget-travel.component.scss'],
})
export class BudgetTravelComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  cities: City[] = [
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

  showCityInfo(city: City) {
    this.selectedCity = city;
  }
}
