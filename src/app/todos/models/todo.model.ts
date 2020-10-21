import { ThrowStmt } from '@angular/compiler';

export class Todo {
  public id: number;
  public content: string;
  public completed: boolean;

  constructor( content: string ) {
    this.content = content;
    // this.id = new Date().getTime(); // crear secuencial
    this.id = Math.random();
    this.completed = false;
  }
}
