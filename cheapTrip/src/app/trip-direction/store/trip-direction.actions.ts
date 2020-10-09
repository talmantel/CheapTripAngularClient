import { Action } from '@ngrx/store/src';
import { IPath, IPoint, IPoints, Modes } from '../trip-direction.model';

export const SET_START_POINT = '[TripDirection] Set startPoint';
export const SET_END_POINT = '[TripDirection] Set endartPoint';
export const GET_START_POINT = '[TripDirection] Get startPoint';
export const GET_END_POINT = '[TripDirection] Get endartPoint';
export const GET_AUTOCOMPLETE = '[TripDirection] Get Autocomplete';
export const SET_START_POINT_AUTOCOMPLETE =
  '[TripDirection] Set startPointAutocomplete';
export const SET_END_POINT_AUTOCOMPLETE =
  '[TripDirection] Set endPointAutocomplete';
export const GET_ROUTS = '[TripDirection] Get Routs';
export const SET_ROUTS = '[TripDirection] Set Routs';
export const AUTOCOMPLETE_FAIL = '[TripDirection] Autocomplete Fail';
export const CLEAN_DATA = '[TripDirection] Clean Data';
export const SET_MODE = '[TripDirection] Set Mode';

export class SetStartPoint implements Action {
  readonly type = SET_START_POINT;
  constructor(public payload: string) {}
}

export class SetEndPoint implements Action {
  readonly type = SET_END_POINT;
  constructor(public payload: string) {}
}

export class GetStartPoint implements Action {
  readonly type = GET_START_POINT;
  constructor() {}
}

export class GetEndPoint implements Action {
  readonly type = GET_END_POINT;
  constructor() {}
}

export class GetAutocomplete implements Action {
  readonly type = GET_AUTOCOMPLETE;
  constructor(public payload: IPoint) {}
}

export class SetStartPointAutocomplete implements Action {
  readonly type = SET_START_POINT_AUTOCOMPLETE;
  constructor(public payload: Array<{ id: number; name: string }>) {}
}

export class SetEndPointAutocomplete implements Action {
  readonly type = SET_END_POINT_AUTOCOMPLETE;
  constructor(public payload: Array<{ id: number; name: string }>) {}
}

export class GetRouts implements Action {
  readonly type = GET_ROUTS;
  constructor(public payload: [number, number]) {}
}

export class SetRouts implements Action {
  readonly type = SET_ROUTS;
  constructor(
    public payload: { paths: IPath[]; endPoints: { from: string; to: string } }
  ) {}
}

export class AutoCompleteFail implements Action {
  readonly type = AUTOCOMPLETE_FAIL;
  constructor(public payload: string) {}
}

export class CleanData implements Action {
  readonly type = CLEAN_DATA;
  constructor() {}
}
export class SetMode implements Action {
  readonly type = SET_MODE;
  constructor(public payload: Modes) {}
}

export type TripDirectionActions =
  | GetEndPoint
  | GetStartPoint
  | GetAutocomplete
  | SetEndPoint
  | SetEndPointAutocomplete
  | SetStartPoint
  | SetStartPointAutocomplete
  | GetRouts
  | SetRouts
  | AutoCompleteFail
  | CleanData
  | SetMode;
