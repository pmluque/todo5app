import { createAction , props } from '@ngrx/store';
// 8
export const create = createAction(
                '[TODO] Create' , props<{ content: string}>()
            );
// 15
export const toogle = createAction(
  '[TODO] Toogle' , props<{ id: number}>()
);
// 16
export const edit = createAction(
  '[TODO] Edit' , props<{ id: number , content: string }>()
);
// 17
export const del = createAction(
  '[TODO] Delete' , props<{ id: number }>()
);
// 18 : parámetro true pone a todos a true y si false todos a false.
export const toogleAll = createAction(
  '[TODO] ToogleAll' , props<{ completed: boolean}>()
);

// 21 : eliminar todos los compeltados -> ahora ir al reducer a implementar
export const clean = createAction( '[TODO] Clean' );
