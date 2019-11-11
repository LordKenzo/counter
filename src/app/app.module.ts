import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { FiglioComponent } from './counter/figlio/figlio.component';
import { NipoteComponent } from './counter/nipote/nipote.component';

// Redux:
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { createLogger } from 'redux-logger';
import { counterReducer, AppState } from './redux/reducers';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    FiglioComponent,
    NipoteComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<AppState>) {
    ngRedux.configureStore(counterReducer, {counter: 0}, [createLogger()]);
  }
}
