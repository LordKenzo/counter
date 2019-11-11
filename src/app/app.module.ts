import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { FiglioComponent } from './counter/figlio/figlio.component';
import { NipoteComponent } from './counter/nipote/nipote.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    FiglioComponent,
    NipoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
