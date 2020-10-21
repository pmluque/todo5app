import { createReducer, on } from '@ngrx/store';
import { create , toogle , edit, del , toogleAll, clean } from './todo.actions';

// Importar modelo
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
  new Todo('Visitar la luna') ,
  new Todo('Visitar marte') ,
  new Todo('Visitar jupiter')
]; // array de todos


const _todoReducer = createReducer(
  initialState,
  on(create, (state, { content }) => [...state, new Todo( content )]) ,
  // 15
  on(toogle, (state, { id }) => {
    return state.map ( todo => {              // <-- el map evita que mute el objeto array
     if ( todo.id === id ){                    // <-- si no hago el if pueden mutar no controlo el reenvio de todos los que no cambian
      return {                                // <-- este otro return evita que muten el objeto todo "item"
              ...todo,                        // <-- usa los ... para tomar todo el resto de propiedades || operador express ...
              completed: !todo.completed
        }
     } else {
       return todo;
     }
   });
  }),
  // 16
  on(edit, (state, { id , content }) => {
    return state.map ( todo => {              // <-- el map evita que mute el objeto array
     if ( todo.id === id ){                    // <-- si no hago el if pueden mutar no controlo el reenvio de todos los que no cambian
      return {                                // <-- este otro return evita que muten el objeto todo "item"
              ...todo,                        // <-- usa los ... para tomar todo el resto de propiedades || operador express ...
              content: content
        }
     } else {
       return todo;
     }
   });
  }),
  // 16 : retorna todo menos el id que hemos marcado para borrar
  on(del, (state, { id }) => state.filter ( todo => todo.id !== id  ))  ,
  // 18
  on(toogleAll, (state, { completed }) => {
    return state.map ( todo => {              // <-- el map evita que mute el objeto array
      return {                                // <-- este otro return evita que muten el objeto todo "item"
              ...todo,                        // <-- usa los ... para tomar todo el resto de propiedades || operador express ...
              completed
      }
   });
  }),
  // 21 : borrar completados -> ir a disparar la acción (evento html y implementar evento)
  on(clean, (state) => state.filter ( todo => !todo.completed ))
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
