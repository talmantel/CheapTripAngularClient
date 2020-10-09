import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';

import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as fromApp from '../store/app.reducer';
import { IPath } from '../trip-direction/trip-direction.model';

export interface IGrid {
  color: string;
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit, OnDestroy {
  paths: IPath[];
  getPathsSubscription: Subscription;

  //for UIw
  grids: IGrid[];
  colsAmount = 7;

  matcher: MediaQueryList;

  // reference information: available resolutions
  viewportSizes = [
    Breakpoints.XSmall,
    Breakpoints.Small,
    Breakpoints.Medium,
    Breakpoints.Large,
    Breakpoints.XLarge,
    Breakpoints.Web,
    Breakpoints.WebLandscape,
    Breakpoints.WebPortrait,
    Breakpoints.Handset,
    Breakpoints.HandsetLandscape,
    Breakpoints.HandsetPortrait,
    Breakpoints.Tablet,
    Breakpoints.TabletLandscape,
    Breakpoints.TabletPortrait,
  ];

  constructor(
    breakpointObserver: BreakpointObserver,
    private store: Store<fromApp.AppState>
  ) {
    breakpointObserver
      .observe([Breakpoints.HandsetLandscape, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
      });

    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe((state: BreakpointState) => {
        this.grids = this.getGridsSize(breakpointObserver);
      });
  }

  ngOnInit(): void {
    this.getPathsSubscription = this.store
      .select('directions')
      .subscribe((state) => {
        this.paths = state.paths;
      });
  }

  ngOnDestroy(): void {
    this.getPathsSubscription.unsubscribe;
  }

  private getGridsSize(obs: BreakpointObserver): IGrid[] {
    let sizeTab: IGrid[] = [];
    if (obs.isMatched(Breakpoints.XSmall) || obs.isMatched(Breakpoints.Small)) {
      sizeTab = [
        { color: 'grey', cols: 7, rows: 2 },
        { color: 'blue', cols: 0, rows: 2 },
      ];
    } else if (
      obs.isMatched(Breakpoints.Medium) ||
      obs.isMatched(Breakpoints.Large) ||
      obs.isMatched(Breakpoints.XLarge)
    ) {
      sizeTab = [
        { color: 'grey', cols: 2, rows: 2 },
        { color: 'whitesmoke', cols: 5, rows: 2},
      ];
    }
    return sizeTab;
  }
}
