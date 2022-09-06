import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-averages',
  templateUrl: './averages.component.html',
  styleUrls: ['./averages.component.css']
})
export class AveragesComponent implements OnInit {
  times!: Array<string>;
  averageOfFive!: Number;
  averageOfAll!: Number;
  bestOfFive!: Number;
  constructor() { }

  ngOnInit(): void {
    this.getTimes();
    setTimeout(() => {
      this.ao5();
    }, 1000)

    this.ao5();
  }

  getTimes() {
    let temp = localStorage.getItem('times');
    this.times = JSON.parse(temp || '');
  }

  ao5() {
    this.getTimes();
    this.aoAll();
    this.bo5();

    let add = 0;
    for (let j = this.times.length - 1; j > this.times.length - 6; j--) {
      add += Number(this.times[j]);
    }
    this.averageOfFive = add / 5;

    }

    aoAll() {
      let add = 0;
      for (let i = 0; i < this.times.length; i++) {
        add += Number(this.times[i]);
      }
      this.averageOfAll = add / this.times.length;

    }

    bo5() {
      let temp = 0;
      for (let j = this.times.length - 1; j > this.times.length - 6; j--) {
        if (Number(this.times[j]) > temp) {
          temp = Number(this.times[j]);
        }
      }
      this.bestOfFive = temp;

    }

    }



