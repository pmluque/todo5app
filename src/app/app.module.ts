import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// 8
import { StoreModule } from '@ngrx/store';
// 19: ya no se usa - import { todoReducer } from './todos/todo.reducer';   // personalizado a mis todos
// 9
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
// 11
import { ReactiveFormsModule } from '@angular/forms';

// 0 : automático
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoModule } from './todos/todo.module';
import { FooterComponent } from './footer/footer.component';

// 19
import { appReducers } from './app.reducer';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    StoreModule.forRoot( appReducers ) ,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
