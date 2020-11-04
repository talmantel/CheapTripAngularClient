import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, of, Subject, Subscription } from 'rxjs';

import { HostListener } from '@angular/core';

import * as fromApp from '../store/app.reducer';
import * as TripDirectionActions from './store/trip-direction.actions';
import { IPathPoint, IPoint, IPoints, Modes } from './trip-direction.model';

@Component({
  selector: 'app-trip-direction',
  templateUrl: './trip-direction.component.html',
  styleUrls: ['./trip-direction.component.scss'],
})
export class TripDirectionComponent implements OnInit {
  startPoint: IPathPoint;
  startP: string;
  endP: IPathPoint;
  endPoint: IPathPoint;
  points: [IPathPoint, IPathPoint];
  toHome: boolean;

  startPointAutoComplete: IPathPoint[];
  endPointAutoComplete: IPathPoint[];
  selectDirectionSubscription: Subscription;
  mode: Modes;
  pointSubj$: Subject<{ from: IPathPoint; to: IPathPoint }>;


  constructor(
    private store: Store<fromApp.AppState>,
    private route: ActivatedRoute
  ) {}

  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    this.store.dispatch(new TripDirectionActions.SetMode(Modes.SEARCH));
  }

  ngOnInit(): void {
    this.pointSubj$ = new BehaviorSubject({ from: null, to: null });



    this.route.queryParams.subscribe(
      (queryParams: {
        from: string;
        fromID: number;
        to: string;
        toID: number;
      }) => {
        if (Object.keys(queryParams).length > 0) {
          const payload = [
            { id: queryParams.fromID, name: queryParams.from },
            { id: queryParams.toID, name: queryParams.to },
          ];
          this.store.dispatch(new TripDirectionActions.GetRouts());
        }
      }
    );
    this.selectDirectionSubscription = this.store
      .select('directions')
      .subscribe((state) => {
        this.pointSubj$.next({ from: state.startPoint, to: state.endPoint });
        this.startPointAutoComplete = state.startPointAutoComplete;
        this.endPointAutoComplete = state.endPointAutoComplete;
        this.mode = state.mode; // for form horisontal or vertical oriantation
      });
  }

  onStartPointSelected(point: IPathPoint) {
    this.store.dispatch(new TripDirectionActions.SetStartPoint(point));
    this.startPoint = point;
  }

  onEndPointSelected(point: IPathPoint) {
    this.store.dispatch(new TripDirectionActions.SetEndPoint(point));
    this.endPoint = point;
  }

  onChangePoint(point: IPoint): void {
    this.store.dispatch(new TripDirectionActions.GetAutocomplete(point));
  }

   /*getRouts(_points: IPoint): void {
    this.store.dispatch(
      new TripDirectionActions.GetRouts([this.startPoint, this.endPoint])
    );
  } */

  cleanData(_event?: boolean): void {
    this.store.dispatch(new TripDirectionActions.CleanData(false));
  }
}
