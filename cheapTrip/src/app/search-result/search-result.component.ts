import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as fromApp from '../store/app.reducer';
import { IPath } from '../trip-direction/trip-direction.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit, OnDestroy {
  paths: IPath[];
  getPathsSubscription: Subscription;
  isLoading: boolean;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.getPathsSubscription = this.store
      .select('directions')
      .subscribe((state) => {
        this.paths = state.paths;
        this.isLoading = state.isLoading;
      });
  }

  ngOnDestroy(): void {
    this.getPathsSubscription.unsubscribe();
  }
}
