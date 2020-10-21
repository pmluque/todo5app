import { Component, OnInit } from '@angular/core';
// 13
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { filters } from '../../filters/filters.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  // 13. propiedad para mantener la lista
  todos: Todo[] = [];
  // 20.i.2
  filterCurrent: filters;


  // 13. inyectar store para poder ejecutar acciones
  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    // 13 : suscribir la store
    //this.store.select('todos')
    //          .subscribe( todos => this.todos = todos );
    // 20.i.2
    //this.store.subscribe( state => {
    //      this.todos = state.todos;
    //      this.filterCurrent = state.filter;
    //  } );
    // ejemplo desestructurado
    this.store.subscribe( ({ todos , filter }) => {
        this.todos = todos;
        this.filterCurrent = filter;
    } );

  }

}
