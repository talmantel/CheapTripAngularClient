import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
  MediaMatcher,
} from '@angular/cdk/layout';

import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as fromApp from '../store/app.reducer';
import { IPath } from '../trip-direction/trip-direction.model';




// reference information: available resolutions
const viewportSizes = [
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
const ROW_HEIGHT = 250;
enum FrameWidth {
  SMALLPHONES = 360 * 0.95,
  PHONES = 420 ,
  SSMALL = 360,
  XSMALL = 600 * 0.9,
  SMALL = 768 * 0.9,
  MEDIUM = 700,
  LARGE = 700,
  // XLARGE = 1000,
}

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit, OnDestroy {
  paths: IPath[];
  isDesktop = false;
  getPathsSubscription: Subscription;
  isLoading: boolean;

  // for UIw

  colsAmount = 7;
  rowHeight: string;
  frameWidth: number;

  // matcher: MediaQueryList;

  constructor(
    breakpointObserver: BreakpointObserver,
    private store: Store<fromApp.AppState>,

    public mediaMatcher: MediaMatcher
  ) {
    /*   breakpointObserver
      .observe([Breakpoints.HandsetLandscape, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {}); */

    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe((state: BreakpointState) => {
        this.getGridsSize(breakpointObserver);
      });
  }

  ngOnInit(): void {
    this.getPathsSubscription = this.store
      .select('directions')
      .subscribe(state => {
        this.paths = state.paths;
        this.isLoading = state.isLoading

        this.rowHeight = state.pathsAmount * ROW_HEIGHT + 'px';
      });
  }

  ngOnDestroy(): void {
    this.getPathsSubscription.unsubscribe();
  }

  private getGridsSize(obs: BreakpointObserver) {
    if (obs.isMatched('(max-width: 361px)')) {
      this.frameWidth = FrameWidth.SMALLPHONES;
    } else if (obs.isMatched('(max-width: 412px)')) {
      this.frameWidth = FrameWidth.PHONES;
    } else if (obs.isMatched(Breakpoints.XSmall)) {
      this.frameWidth = FrameWidth.XSMALL;
    } else if (obs.isMatched(Breakpoints.Small)) {
      this.frameWidth = FrameWidth.SMALL;
      this.isDesktop = true;
    } else if (
      obs.isMatched(Breakpoints.Medium)
      // obs.isMatched(Breakpoints.Large) ||
      // obs.isMatched(Breakpoints.XLarge)
    ) {
      this.frameWidth = FrameWidth.MEDIUM;
      this.isDesktop = true;
    } else if (obs.isMatched(Breakpoints.Large)) {
      this.frameWidth = FrameWidth.LARGE;
      this.isDesktop = true;
    }
  }
}
