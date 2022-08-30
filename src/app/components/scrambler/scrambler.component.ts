import { Component, OnInit } from '@angular/core';
import * as Scrambler from 'sr-scrambler';

@Component({
  selector: 'app-scrambler',
  templateUrl: './scrambler.component.html',
  styleUrls: ['./scrambler.component.css'],
})
export class ScramblerComponent implements OnInit {
  cubeSize: number = 3;
  scrambleSize: number = 15;
  scramble: String = Scrambler.cube(this.cubeSize, this.scrambleSize);
  constructor() { }

  ngOnInit(): void {


  }

  public rescramble() {
    this.scramble = Scrambler.cube(this.cubeSize, this.scrambleSize);
  }


}
