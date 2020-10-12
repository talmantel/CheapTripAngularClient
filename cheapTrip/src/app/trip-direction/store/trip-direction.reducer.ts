import { IPath, IPathPoint, Modes } from '../trip-direction.model';
import * as TripDirectionActions from './trip-direction.actions';

export interface ITripDirectionState {
  startPoint: IPathPoint;
  endPoint: IPathPoint;
  startPointAutoComplete: Array<IPathPoint>;
  endPointAutoComplete: Array<IPathPoint>;
  paths: IPath[];
  mode: Modes;
  errorMessage: string;
}

const initialState: ITripDirectionState = {
  startPoint: { id: 0, name: '' },
  endPoint: { id: 0, name: '' },
  startPointAutoComplete: [],
  endPointAutoComplete: [],
  paths: [],
  mode: Modes.SEARCH,
  errorMessage: '',
};

export function tripDirectionReducer(
  state = initialState,
  action: TripDirectionActions.TripDirectionActions
) {
  switch (action.type) {
    case TripDirectionActions.SET_START_POINT:
      return {
        ...state,
        endPoint: action.payload,
      };

    case TripDirectionActions.SET_END_POINT:
      return {
        ...state,
        endPoint: action.payload,
      };

    case TripDirectionActions.SET_START_POINT_AUTOCOMPLETE:
      let newStartAutocompleteList = []
      if(action.payload.length == 0){
        newStartAutocompleteList = [...state.startPointAutoComplete]
      } else {
        newStartAutocompleteList = action.payload
      }
      return {
        ...state,
        startPointAutoComplete: newStartAutocompleteList,
      };

    case TripDirectionActions.SET_END_POINT_AUTOCOMPLETE:
      let newEndAutocompleteList = []
      if(action.payload.length == 0){
        newEndAutocompleteList = [...state.endPointAutoComplete]
      } else {
        newEndAutocompleteList = action.payload
      }
      return {
        ...state,
        endPointAutoComplete: newEndAutocompleteList,
      };

    case TripDirectionActions.GET_START_POINT:
      return {
        ...state,
      };

    case TripDirectionActions.GET_END_POINT:
      return {
        ...state,
      };

    case TripDirectionActions.GET_AUTOCOMPLETE:
      return {
        ...state,
      };
    case TripDirectionActions.GET_ROUTS:
      return {
        ...state,
      };

    case TripDirectionActions.SET_ROUTS:

      return {
        ...state,
        paths: [...action.payload.paths],
        startPoint: action.payload.endPoints.from,
        endPoint: action.payload.endPoints.to,
        mode: Modes.DELIVERY,
      };

    case TripDirectionActions.AUTOCOMPLETE_FAIL:
      return {
        ...state,
        errorMessage: action.payload,
      };

    case TripDirectionActions.CLEAN_DATA:
      return {
        ...state,
        startPoint: null,
        endPoint: null,
        startPointAutoComplete: [],
        endPointAutoComplete: [],
        paths: [],
        mode: Modes.SEARCH,
        errorMessage: '',
      };

    case TripDirectionActions.SET_MODE:
      return {
        ...state,

        mode: action.payload,
      };

    default:
      return state;
  }
}
