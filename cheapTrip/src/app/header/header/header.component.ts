import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as TripDirectionActions from '../../trip-direction/store/trip-direction.actions';

import * as fromApp from '../../store/app.reducer';
import { Modes } from 'src/app/trip-direction/trip-direction.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
 
  constructor(private route: Router,   private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {

  }

   toHomePage(){
     this.store.dispatch(new TripDirectionActions.SetMode(Modes.SEARCH) );
     this.store.dispatch(new TripDirectionActions.CleanData() );
     this.route.navigate(["/"]);

   }
}
