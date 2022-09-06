import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './components/timer/timer.component';
import { ScramblerComponent } from './components/scrambler/scrambler.component';
import { TimesComponent } from './components/times/times.component';
import { ParentComponent } from './components/parent/parent.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { AveragesComponent } from './components/averages/averages.component';


@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    ScramblerComponent,
    TimesComponent,
    ParentComponent,
    EmitterComponent,
    AveragesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
