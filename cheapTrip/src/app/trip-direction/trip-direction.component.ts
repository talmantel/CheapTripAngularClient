import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
} from '@angular/core';
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
  startPointAutoComplete: IPathPoint[];
  endPointAutoComplete: IPathPoint[];
  selectDirectionSubscription: Subscription;
  mode: Modes;
  pointSubj$: Subject<{ from: IPathPoint; to: IPathPoint }>;
  private subscription: Subscription;


  constructor(
    private store: Store<fromApp.AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    console.log('Back button pressed', event);
  }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params) => {
      console.log('params', params);
    });
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
          this.store.dispatch(new TripDirectionActions.GetRouts(payload));
        }
      }
    );
    this.selectDirectionSubscription = this.store
      .select('directions')
      .subscribe((state) => {
        this.pointSubj$.next({ from: state.startPoint, to: state.endPoint });
        this.points = [state.startPoint, state.endPoint];
        this.startPointAutoComplete = state.startPointAutoComplete;
        this.endPointAutoComplete = state.endPointAutoComplete;
        this.mode = state.mode; // for form horisontal or vertical oriantation
      });
  }

  onChangePoint(point: IPoint): void {
    console.log('my point for autocomplete', point);
    this.store.dispatch(new TripDirectionActions.GetAutocomplete(point));
  }

  getRouts(points: IPoint): void {
    this.store.dispatch(new TripDirectionActions.SetStartPoint(points[0]));
    this.store.dispatch(new TripDirectionActions.SetEndPoint(points[1]));
    this.store.dispatch(
      new TripDirectionActions.GetRouts([points[0], points[1]])
    );
  }

  cleanData(_event: boolean): void {
    this.store.dispatch(new TripDirectionActions.CleanData());
  }
}
