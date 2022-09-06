import { Component, EventEmitter, OnInit, Output, SimpleChanges } from '@angular/core';
import { LocalService } from 'src/app/services/local-service.service';
@Component({
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.css'],
})
export class TimesComponent implements OnInit {
  times!: any;
  @Output() get = new EventEmitter();
  constructor(private local: LocalService) {}

  ngOnInit(): void {
    this.getTimesFromLocalStorage();
  }

  getTimesFromLocalStorage() {
    let temp = localStorage.getItem('times');
    this.times = JSON.parse(temp || '');
  }

  clearTimes() {
    localStorage.setItem('times', JSON.stringify([]));
    this.get.emit();
  }


}
