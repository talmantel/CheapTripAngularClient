import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as TripDirectionActions from '../../trip-direction/store/trip-direction.actions';
import { HttpClient } from '@angular/common/http';

import * as fromApp from '../../store/app.reducer';
import { Modes } from 'src/app/trip-direction/trip-direction.model';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLoading: boolean;
  subscription: Subscription;

  constructor(
    private route: Router,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}
  isDarkTheme = false;

  ngOnInit(): void {}

  ngAfterViewInit() {
    console.log('HEADER PAGE');
    this.http
      .get('assets/new_json/transportation_types.json')
      .subscribe(data => {
        console.log('TRANSPORT', data);
        sessionStorage.setItem('myData', JSON.stringify(data));
      });
  }

  toHomePage(): void {
    this.store.dispatch(new TripDirectionActions.GoHome());

    this.route.navigate(['/']);
  }

  onChangeTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }
}
