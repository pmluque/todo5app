// De la documentación coger esqueleto : https://ngrx.io/guide/store
import { createAction , props } from '@ngrx/store';

export type filters = 'todos' | 'completados' | 'pendientes';

export const setFilter = createAction('[Filters] Set filter' , props< {filter: filters} >() );
