import { IPath, Modes } from '../trip-direction.model';
import * as TripDirectionActions from './trip-direction.actions';

export interface State {
  startPoint: string;
  endPoint: string;
  startPointAutoComplete: string[];
  endPointAutoComplete: string[];
  paths: IPath[];
  mode: Modes;
  errorMessage: string;
}

const DIRECTIONS_AUTOCOMPLETE = [
  'Moscow',
  'Tel-Aviv',
  'London',
  'Viena',
  'San-Paolo',
  'Krakow',
  'Bansko',
];
const initialState: State = {
  startPoint: '',
  endPoint: '',
  startPointAutoComplete: [],
  endPointAutoComplete: [],
  paths: [],
  mode : Modes.SEARCH,
  errorMessage: ''
};

export function tripDirectionReducer(
  state = initialState,
  action: TripDirectionActions.TripDirectionActions
) {
  switch (action.type) {
    case TripDirectionActions.SET_START_POINT:
      return {
        ...state,
        startPoint: action.payload,
      };

    case TripDirectionActions.SET_END_POINT:
      return {
        ...state,
        startPoint: action.payload,
      };

    case TripDirectionActions.SET_START_POINT_AUTOCOMPLETE:
      return {
        ...state,
        startPointAutoComplete: action.payload,
      };

    case TripDirectionActions.SET_END_POINT_AUTOCOMPLETE:
      return {
        ...state,
        endPointAutoComplete: action.payload,
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
        paths: [...action.payload],
        mode: Modes.DELIVERY
      };

      case TripDirectionActions.AUTOCOMPLETE_FAIL:
        return {
          ...state,
         errorMessage: action.payload
        };
    default:
      return state;
  }
}
