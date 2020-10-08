import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as fromApp from '../store/app.reducer';
import * as TripDirectionActions from './store/trip-direction.actions';
import { IPathPoint, IPoint, IPoints, Modes } from './trip-direction.model';

@Component({
  selector: 'app-trip-direction',
  templateUrl: './trip-direction.component.html',
  styleUrls: ['./trip-direction.component.scss'],
})
export class TripDirectionComponent implements OnInit {
  startPoint: string;
  endPoint: string;
  points: [string, string];
  startPointAutoComplete: IPathPoint[];
  endPointAutoComplete: IPathPoint[];
  selectDirectionSubscription: Subscription;
  mode: Modes;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.selectDirectionSubscription = this.store
      .select('directions')
      .subscribe((state) => {
        this.points = [state.startPoint, state.endPoint];
        this.startPointAutoComplete = state.startPointAutoComplete;
        this.endPointAutoComplete = state.endPointAutoComplete;
        this.mode = state.mode;
      });
  }

  onChangePoint(point: IPoint) {
    this.store.dispatch(new TripDirectionActions.GetAutocomplete(point));
  }

  getRouts(event: any) {
    this.store.dispatch(new TripDirectionActions.GetRouts(event));
  }

  cleanData(_event: boolean) {
    this.store.dispatch(new TripDirectionActions.CleanData());
  }
}
