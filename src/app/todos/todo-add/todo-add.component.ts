import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
// 12
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  // 12
  txtInput: FormControl;

  constructor( private store: Store<AppState>) {
    this.txtInput = new FormControl('' , Validators.required );
  }

  ngOnInit(): void {
  }

  // 12
  add() {

    if ( this.txtInput.invalid ) { return;}

    console.log( this.txtInput.value ); // No hace falta recibirlo como parámetro porque está en el FormControl
    console.log( this.txtInput.valid );

    this.store.dispatch( actions.create({ content: this.txtInput.value }));
    this.txtInput.reset();
  }

}
