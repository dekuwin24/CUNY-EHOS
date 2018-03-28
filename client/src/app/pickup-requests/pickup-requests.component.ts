import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'moment';
import 'fullcalendar';


@Component({
  selector: 'app-pickup-requests',
  templateUrl: './pickup-requests.component.html',
  styleUrls: ['./pickup-requests.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class PickupRequestsComponent implements OnInit {
  events: any[];
  headerConfig: any;
  dialogVisible: boolean = false;
  constructor() { }

  ngOnInit() {
    this.events = [
      {
          "title": "All Day Event",
          "start": "2016-01-01"
      },
      {
          "title": "Long Event",
          "start": "2016-01-07",
          "end": "2016-01-10"
      },
      {
          "title": "Repeating Event",
          "start": "2016-01-09T16:00:00"
      },
      {
          "title": "Repeating Event",
          "start": "2016-01-16T16:00:00"
      },
      {
          "title": "Conference",
          "start": "2016-01-11",
          "end": "2016-01-13"
      }
  ];
    this.headerConfig = {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
  };
  }

}
