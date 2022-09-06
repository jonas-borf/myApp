import { Component, OnInit, ViewChild } from '@angular/core';
import { AveragesComponent } from '../averages/averages.component';
import { ScramblerComponent } from '../scrambler/scrambler.component';
import { TimerComponent } from '../timer/timer.component';
import { TimesComponent } from '../times/times.component';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  @ViewChild(ScramblerComponent) scrambler: any;
  @ViewChild(TimesComponent) times: any;
  @ViewChild(TimerComponent) timer: any;
  @ViewChild(AveragesComponent) avg: any;
  constructor() {}

  ngOnInit(): void {}

  callScramble() {
this.scrambler.rescramble();

  }

  getTimes() {
  setTimeout(() => {
    this.times.getTimesFromLocalStorage();
    this.avg.ao5();
    this.timer.updateTimes();
  }, 10)


}

  timerStart() {

  }

  keyUp($event: any) {
    console.log($event.key);

    this.timer.keyUp($event);
  }

  keyDown($event: any) {
    this.timer.keyDown($event);
  }

  }

