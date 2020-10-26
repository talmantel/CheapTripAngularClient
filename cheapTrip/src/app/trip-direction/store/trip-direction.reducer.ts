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
  pathsAmount: number;
  isLoading: boolean;
}

const initialState: ITripDirectionState = {
  startPoint: { id: 0, name: '' },
  endPoint: { id: 0, name: '' },
  startPointAutoComplete: [],
  endPointAutoComplete: [],
  paths: [],
  mode: Modes.SEARCH,
  errorMessage: '',
  pathsAmount: 0,
  isLoading: false
};

export function tripDirectionReducer(
  state = initialState,
  action: TripDirectionActions.TripDirectionActions
): ITripDirectionState {
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
      let newStartAutocompleteList = [];
      if (action.payload.length === 0) {
        newStartAutocompleteList = [...state.startPointAutoComplete];
      } else {
        newStartAutocompleteList = action.payload;
      }
      return {
        ...state,
        startPointAutoComplete: newStartAutocompleteList,
      };

    case TripDirectionActions.SET_END_POINT_AUTOCOMPLETE:
      let newEndAutocompleteList = [];
      if (action.payload.length === 0) {
        newEndAutocompleteList = [...state.endPointAutoComplete];
      } else {
        newEndAutocompleteList = action.payload;
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
        isLoading: true
      };

    case TripDirectionActions.SET_ROUTS:
      const pathsAmount = action.payload.paths.length;
      const length1 = action.payload.paths.reduce((sum, current) => {
        return sum + current.details.direct_paths.length;
      }, 0);
      console.log('action payload', action.payload.paths);

      const res = length1 + pathsAmount;
      return {
        ...state,
        paths: [...action.payload.paths],
        startPoint: action.payload.endPoints.from,
        endPoint: action.payload.endPoints.to,
        mode: Modes.DELIVERY,
        pathsAmount: res,
        isLoading: false,
      };

    case TripDirectionActions.AUTOCOMPLETE_FAIL:
      return {
        ...state,
        errorMessage: action.payload,
      };

    case TripDirectionActions.CLEAN_DATA:
      console.log('reducer');
      return {
        ...state,
        startPoint: null,
        endPoint: null,
        startPointAutoComplete: [],
        endPointAutoComplete: [],
       // paths: [],
     //   mode: Modes.SEARCH,
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
