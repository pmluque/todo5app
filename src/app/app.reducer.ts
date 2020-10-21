import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './todos/models/todo.model';
import { todoReducer } from './todos/todo.reducer';
import { filters } from './filters/filters.actions';
import { filterReducer } from './filters/filters.reducer';
/*
  Fichero que mantiene el estado global porque puedo tener varios módulos y cada uno gestionar su modelo.

*/
export interface AppState {
  todos: Todo[] ,
  filter: filters
}
// 19
export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer ,
  filter: filterReducer
}
