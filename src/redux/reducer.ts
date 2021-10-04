import { REQUEST_POKEMON_PENDING, REQUEST_POKEMON_SUCCESS } from './constants';
import { ActionModel } from './model';

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
  count: 0,
  previous: null,
  next: null
};

export function DataReducer(state = INITIAL_STATE, action: ActionModel) {
  switch (action.type) {
    case REQUEST_POKEMON_PENDING:
      return Object.assign({}, state, { loading: true });
    case REQUEST_POKEMON_SUCCESS:
      return Object.assign({}, state, { loading: false, data: action.payload });
    default:
      return state;
  }
}
