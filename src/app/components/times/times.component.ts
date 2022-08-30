import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/services/local-service.service';
@Component({
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.css']
})
export class TimesComponent implements OnInit {
  times!: any;
  constructor(private local: LocalService) { }

  ngOnInit(): void {
  }

  getTimes() {



  }

}
