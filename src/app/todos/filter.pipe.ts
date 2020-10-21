import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { filters } from '../filters/filters.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {
  // el pipe recibe el array de todos
  transform(valueTodoArray: Todo[], filter: filters): Todo[] {
    switch( filter) {
      case 'completados' :
        return valueTodoArray.filter( todo => todo.completed );
      case 'pendientes' :
        return valueTodoArray.filter( todo => !todo.completed );
      default:
        return valueTodoArray;
    }
  }

}
