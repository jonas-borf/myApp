import { Component, OnInit } from '@angular/core';
import { ScramblerComponent } from '../scrambler/scrambler.component';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private scrambler:ScramblerComponent) { }

  ngOnInit(): void {
  }

  callScrambleFunc() {
    this.scrambler.rescramble();
  }


}
