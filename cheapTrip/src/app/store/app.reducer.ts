import { ActionReducerMap } from '@ngrx/store';
import * as fromTripDirection from '../trip-direction/store/trip-direction.reducer';

export interface AppState {
  directions: fromTripDirection.ITripDirectionState;
}

export const appReducer: ActionReducerMap<AppState> = {
  directions: fromTripDirection.tripDirectionReducer,
};
