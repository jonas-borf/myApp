import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  time: number = 0;
  key!: string;
  start!: number;
  end!: number;
  timerRunning: boolean = false;
  terminateTimer: boolean = false;
  @Output() notifyTimerStart = new EventEmitter();
  constructor() {}

  ngOnInit(): void {

  }

  @HostListener('window:keydown', ['$event'])
  spaceEvent(event: any) {
    if (event.keyCode == 32 && this.timerRunning) {
      this.terminateTimer = true;
    }
    else if (event.keyCode == 32) {
    this.terminateTimer = false;
    this.timerStart();
    this.notifyTimerStart.emit;
  }
  }


  timerStart() {
    this.start = Date.now();
    this.time = 0;
    this.timerRunning = true;
    const timer = setInterval(() => {
      if (this.terminateTimer == true) {
        this.end = Date.now();
        this.time = (this.end - this.start) / 1000;
        this.timerRunning = false;
        console.log('terminating timer');
        clearInterval(timer);

      }
      this.time+= .01;
    }, 10);
  }
}

