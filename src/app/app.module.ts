import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './components/timer/timer.component';
import { ScramblerComponent } from './components/scrambler/scrambler.component';
import { TimesComponent } from './components/times/times.component';
import { ParentComponent } from './components/parent/parent.component';


@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    ScramblerComponent,
    TimesComponent,
    ParentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
