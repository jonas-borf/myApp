import { Component, OnInit, ViewChild } from '@angular/core';
import { ScramblerComponent } from '../scrambler/scrambler.component';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {


  @ViewChild(ScramblerComponent) scrambler: any;
  constructor() { }

  ngOnInit(): void {
  }

  callScramble() {
    this.scrambler.rescramble();
  }
}
