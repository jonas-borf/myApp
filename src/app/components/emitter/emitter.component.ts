import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css'],
})
export class EmitterComponent implements OnInit {
  @Output() notifyTimerStart = new EventEmitter();
  @Output() notifyGetItems = new EventEmitter();
  @Output() notifyKeyDown = new EventEmitter();
  @Output() notifyKeyUp = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:keydown', ['$event'])
  spaceEvent(event: any) {
    console.log(event.key);
    // event is sent here but all values are undefined for some reason

    this.notifyKeyDown.emit(event);
  }
   @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    this.notifyKeyUp.emit(event);
  }
  // keep all the event emmitters here for better organization
}
