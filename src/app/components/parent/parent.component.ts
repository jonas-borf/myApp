import { Component, OnInit, ViewChild } from '@angular/core';
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
  constructor() {}

  ngOnInit(): void {}

  callScramble() {
    this.scrambler.rescramble();
  }

  getTimes() {
    this.times.getTimes();
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

