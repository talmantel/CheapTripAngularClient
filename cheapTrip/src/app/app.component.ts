import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'CheapTrip';
  width=400;
  constructor(breakpointObserver: BreakpointObserver, private router: Router) {
   /*  breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe((state: BreakpointState) => {
        this.getGridsSize(breakpointObserver);
      }); */
  }

 /*  private getGridsSize(obs: BreakpointObserver) {
    if (obs.isMatched(Breakpoints.XSmall)) {

      this.width = 390;
    } else if (obs.isMatched(Breakpoints.Small)) {
      this.width = 400;
    } else if (
      obs.isMatched(Breakpoints.Medium) ||
      obs.isMatched(Breakpoints.Large) ||
      obs.isMatched(Breakpoints.XLarge)
    ) {
      this.width = 700;
    }
  } */
}
