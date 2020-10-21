import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
// 14
import { Todo } from '../models/todo.model';
import { FormControl , Validators } from '@angular/forms';

// 15 : importaciones ngrx para ejecutar acciones
import { AppState } from '../../app.reducer' ;
import { Store } from '@ngrx/store';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  // 14
  @Input() todo: Todo;
  @ViewChild('inputRef') txtInputRef: ElementRef;

  chkCompleted: FormControl;
  txtInput: FormControl;
  // Clase para edición. Doble clic
  editing = false;

  // 15. importar el store para lanzar acción
  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {

    // 14
    this.chkCompleted = new FormControl( this.todo.completed );
    this.txtInput = new FormControl( this.todo.content , Validators.required  );

    // 15
    this.chkCompleted.valueChanges.subscribe( value => {
      console.log( value );
      this.store.dispatch( actions.toogle( {id: this.todo.id }));
    } );
  }

  edit() {
     // 15
     this.editing = true;
     // 16 control
     this.txtInput.setValue( this.todo.content );
     // 15
     // setTimeout( () => { this.txtInputRef.nativeElement.focus();  }, 1); // retrasar para que de tiempo
     setTimeout( () => { this.txtInputRef.nativeElement.select();  }, 1);
  }

  exit() {
    this.editing = false;

    // Hay que controlar que si está vacia no se lance la acción (recordar que el valor es required)
    if ( this.txtInput.invalid ) { console.log('Valor requerido');  return; }                       // Si está vacio me regreso
    if ( this.txtInput.value === this.todo.content ) { console.log('Valor sin cambios'); return; }  // Si no hay cambios me regreso
    this.store.dispatch( actions.edit( {id: this.todo.id , content: this.txtInput.value }));
  }

  delete() {
    this.store.dispatch( actions.del( {id: this.todo.id  }));
  }

}
