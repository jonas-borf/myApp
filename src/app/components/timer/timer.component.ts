import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { LocalService } from 'src/app/services/local-service.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  time: number = 0;
  key!: string;
  i: number = 0;
  start!: number;
  end!: number;
  color: string = 'black';
  timerRunning: boolean = false;
  terminateTimer: boolean = false;
  stop: boolean = false;
  valid: boolean = false;
  changeColor!: any;
  @Output() notifyTimerStart = new EventEmitter();
  @Output() notifyGetItems = new EventEmitter();
  constructor(private local: LocalService) {}

  ngOnInit(): void {
  }

  @HostListener('window:keydown', ['$event'])
  spaceEvent(event: any) {
    if (event.keyCode == 32 && !this.timerRunning && !this.stop) {
      this.color = 'red';
      this.stop = true;
       this.changeColor = setTimeout(() => {

        this.color = 'green';
      }, 500);
      this.changeColor;
    } else if (event.keyCode && this.timerRunning) {
        this.terminateTimer = true;
        this.notifyGetItems.emit();
         this.timerRunning = false;

    }
  }
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);
    if (event.key == ' ' && !this.timerRunning && this.color == 'green') {
      this.terminateTimer = false;
      this.timerStart();
      this.color = 'black'
      this.notifyTimerStart.emit();
      this.stop = false;
    } else if (event.key == ' ' && !this.timerRunning && this.color == 'red') {
      clearTimeout(this.changeColor);
      this.stop = false;
      this.color = 'black';
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
        this.stop = false;
        this.color = 'black';
        console.log('terminating timer');
        clearInterval(timer);
        this.local.saveData(this.i.toString(), this.time.toString())
        this.i++;
      }
      this.time += 0.01;
    }, 10);
  }
}

