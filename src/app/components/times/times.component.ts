import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/services/local-service.service';
@Component({
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.css']
})
export class TimesComponent implements OnInit {
  times!: Array<any>;
  valid: boolean = true;
  i: number = 0;
  constructor(private local: LocalService) { }

  ngOnInit(): void {
  }

   get() {

    while (this.valid) {
      this.times.push(this.local.getData(this.i.toString()))
      this.i++;
      if (!this.local.getData(this.i.toString())) {
        this.valid = false;
      }
    }
  }

}
