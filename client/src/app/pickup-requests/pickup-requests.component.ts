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
  header: any;
  dialogVisible: boolean = false;
  constructor() { }

  ngOnInit() {
    this.events = [
      {
          "title": "All Day Event",
          "start": "2018-03-28"
      },
      {
          "title": "Long Event",
          "start": "2018-03-07",
          "end": "2018-03-10"
      },
      {
          "title": "Repeating Event",
          "start": "2018-03-09T16:00:00"
      },
      {
          "title": "Repeating Event",
          "start": "2018-03-16T16:00:00"
      },
      {
          "title": "Conference",
          "start": "2018-03-11",
          "end": "2018-03-30"
      }
  ];
    this.header = {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
  };
  }

}
