import { Component, OnInit } from '@angular/core';
// 20
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { filters } from '../../filters/filters.actions';
// 20.f
import * as actions from '../../filters/filters.actions';
// 21
import { clean } from '../../todos/todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  // 20.d
  filterCurrent: filters = 'todos';
  filtersHtml: filters[] = ['todos', 'completados', 'pendientes'];
  // 20.g
  countPending: number = 0;

  // 20.a
  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    // 20.c  | 20.g -> ir al html u usar el countPending
    this.store.subscribe( state => {
         this.filterCurrent = state.filter;
         this.countPending  = state.todos.filter( todo => !todo.completed ).length;
        } );
  }

  // 20.f implementar evento
  changeFilter( item: filters ) {
    this.store.dispatch( actions.setFilter( { filter: item } ) );

  }

  // 21
  clean() {
    this.store.dispatch( clean() );
  }

}
