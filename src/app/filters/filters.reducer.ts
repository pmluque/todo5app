import { createReducer, on } from '@ngrx/store';
import { setFilter , filters } from './filters.actions';

export const initialState: filters = 'todos';

const _filtersReducer = createReducer(
  initialState,
  on(setFilter, (state , { filter }) => filter )
);

export function filterReducer(state, action) {
  return _filtersReducer(state, action);
}
