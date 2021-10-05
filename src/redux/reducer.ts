import {
  CHANGE_ROWS_PER_PAGE,
  REQUEST_POKEMON_PENDING,
  REQUEST_POKEMON_SUCCESS,
  SORT_BY_VALUE
} from './constants';
import { ActionModel } from './model';
import { sortBy } from 'lodash';

const INITIAL_STATE = {
  loading: true,
  data: [],
  error: null,
  count: 0,
  previous: null,
  next: null,
  rowsPerPage: 20
};

export function DataReducer(state = INITIAL_STATE, action: ActionModel) {
  switch (action.type) {
    case REQUEST_POKEMON_PENDING:
      return Object.assign({}, state, { loading: true, data: [] });
    case REQUEST_POKEMON_SUCCESS:
      const { data, ...rest } = action.payload;
      return Object.assign({}, state, { loading: false, data, ...rest });
    case CHANGE_ROWS_PER_PAGE:
      return Object.assign({}, state, { rowsPerPage: action.payload });
    case SORT_BY_VALUE:
      const SORTED = sortBy(state.data, [action.payload.toLowerCase()]);
      return Object.assign({}, state, { data: SORTED });
    default:
      return state;
  }
}
