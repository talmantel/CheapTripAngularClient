import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, of, Subject, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
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
  pointSubj$: Subject<{from: IPathPoint, to: IPathPoint}>;

  constructor(
    private store: Store<fromApp.AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.pointSubj$ = new BehaviorSubject({from: null, to: null});
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
        this.pointSubj$.next({from: state.startPoint, to: state.endPoint});
        this.points = [state.startPoint, state.endPoint];
        this.startPointAutoComplete = state.startPointAutoComplete;
        this.endPointAutoComplete = state.endPointAutoComplete;
        this.mode = state.mode; //for form horisontal or vertical oriantation
      });
  }

  onChangePoint(point: IPoint) {
    this.store.dispatch(new TripDirectionActions.GetAutocomplete(point));
  }

  getRouts(points: IPoint) {
    this.store.dispatch(new TripDirectionActions.SetStartPoint(points[0]));
    this.store.dispatch(new TripDirectionActions.SetEndPoint(points[1]));

    const queryParams = {
      from: points[0].name,
      fromID: points[0].id,
      to: points[1].name,
      toID: points[1].id,
    };
    this.router.navigate(['/search/myPath'], {
      queryParams: queryParams,
    });
  }



  cleanData(_event: boolean) {
    this.store.dispatch(new TripDirectionActions.CleanData());
    console.log('after clean and before routing');
    this.router.navigate(['/']);
  }
}
