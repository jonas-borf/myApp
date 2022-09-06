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
  i: number = 1;
  start!: number;
  end!: number;
  color: string = 'lightblue';
  timerRunning: boolean = false;
  terminateTimer: boolean = false;
  stop: boolean = false;
  valid: boolean = false;
  changeColor!: any;

  terminateCountDown: boolean = false;
  countDownRunning: boolean = false;
  times: Array<string> = JSON.parse(localStorage.getItem('times') || '');
  @Output() notifyTimerStart = new EventEmitter();
  @Output() notifyGetItems = new EventEmitter();
  constructor(private local: LocalService) {}

  ngOnInit(): void {

  }

  countDown!: any;

  keyUp(event: { key: string }) {

    if (event.key == ' ' && !this.timerRunning && !this.countDownRunning && this.color == 'green') {
      this.countDownTimer();
      this.color = 'lightblue';
      this.timerRunning = false;
      this.stop = false;
    } else if (
      event.key == ' ' &&
      !this.timerRunning &&
      this.countDownRunning &&
      this.color == 'green'
    ) {
      this.terminateTimer = false;

      this.timerStart();
      this.color = 'lightblue';
      this.notifyTimerStart.emit();
      this.stop = false;
    } else if (event.key == ' ' && !this.timerRunning && (this.color == 'red' || this.color == 'yellow')) {
      clearTimeout(this.changeColor);

      this.stop = false;
      this.color = 'lightblue';
    }
  }

  keyDown($event: any) {

    if ($event.key == ' ' && !this.timerRunning && !this.stop) {
      console.log('here');

      this.color = 'red';
      this.stop = true;
      this.changeColor = setTimeout(() => {
        setTimeout(() => {
          this.color = 'green';
        }, 250);
        this.color = 'yellow';
      }, 250)

    } else if ($event.key && this.timerRunning) {
      this.terminateTimer = true;
      this.notifyGetItems.emit();
      this.timerRunning = false;
    }

  }

  timerStart() {
    console.log('timer running');

    this.start = Date.now();
    clearInterval(this.countDown);
    this.countDownRunning = false;
    this.time = 0;
    this.timerRunning = true;
    const timer = setInterval(() => {
      if (this.terminateTimer == true) {
        this.end = Date.now();
        this.time = (this.end - this.start) / 1000;
        this.stop = false;
        this.color = 'lightblue';
        console.log('terminating timer');
        clearInterval(timer);
        this.addToLocalStorage();
      }
      this.time = (Date.now() - this.start) / 1000;
    }, 1);
  }

  countDownTimer() {
    console.log('countdown running');

    this.countDownRunning = true;
    console.log(this.timerRunning);
    console.log(this.countDownRunning);
    this.time = 15;
    this.countDown = setInterval(() => {
      this.time--;
      if (this.time <= 0) {
        this.timerStart();
      }

      console.log(this.timerRunning);
      console.log(this.countDownRunning);


    }, 1000);

  }

  addToLocalStorage() {
    this.times.push(this.time.toString());
    let temp = JSON.stringify(this.times);
    localStorage.setItem('times', temp);

    console.log(localStorage.getItem('times'));

  }

  updateTimes() {
    this.times = JSON.parse(localStorage.getItem('times') || '');
  }
}



