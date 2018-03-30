import { Component, OnInit, ChangeDetectorRef, Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                 //api
//import * as $ from 'jquery';
import { EventsService } from 'angular-event-service';

@Component({
    selector: 'app-pickup-requests',
    templateUrl: './pickup-requests.component.html',
    styleUrls: ['./pickup-requests.component.css'],
    // encapsulation: ViewEncapsulation.None
})
export class PickupRequestsComponent implements OnInit {
    requests: Array<Object> = [{request_id:'18E0001',department: 'CHEM', operator: 'Jane Doe', requested: '3/5/2018'},{request_id:'18E0002',department: 'PHYS', operator: 'John Smith', requested: '3/5/2018'},{request_id:'18E0003',department: 'CHEM', operator: 'Bob Ross', requested: '3/5/2018'}];
    
    events: any[];
    headerConfig: any;
    dialogVisible: boolean = false;
    /*  idGen: number = 100;
     */
    event: any;

    constructor(/*private eventService: EventService,*/ private cd: ChangeDetectorRef) { }
    /* getEvents() {
        return this.http.get('showcase/resources/data/scheduleevents.json')
                    .toPromise()
                    .then(res => <any[]> res.json().data)
                    .then(data => { return data; });
    } */
  
    /* loadEvents(event) {
        let start = event.view.start
        let end = event.view.end
        this.events = this.eventService.getEvents().then(events => {this.events = events;});
    } */
    handleEventClick(e) {
        //e.calEvent = Selected event
        //e.jsEvent = Browser click event
        //e.view = Current view object
    }
    back(fc) {
        fc.prev();
    }


    ngOnInit() {

        this.events = [
        {     
            "title": "Pick UP on CCNY",
            "start": "2018-01-01",
            "description": 'This is a event'
        },
        {
            "title": "PICK UP on QC",
            "start": "2018-01-07",
            "end": "2018-01-10"
        },
        {
            "title": "On Hunter College",
            "start": "2018-01-09T16:00:00"
        },
        {
            "title": "on Baruch college",
            "start": "2018-01-16T16:00:00"
        },
        {
            "title": "Others",
            "start": "2018-01-11",
            "end": "2018-01-13"
        }
        ];
        
        this.headerConfig = {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        };
        
        //this.eventService.getEvents().then(events => {this.events = events;});
        
  }
    handleDayClick(event) {
        this.event = new Array<Object>();
        this.event.start = event.date.format();
        this.dialogVisible = true;

        //trigger detection manually as somehow only moving the mouse quickly after click triggers the automatic detection
        this.cd.detectChanges();
    }
/*
  handleEventClick(e) {
      this.event = new Array<Object>();
      this.event.title = e.calEvent.title;

      let start = e.calEvent.start;
      let end = e.calEvent.end;
      if(e.view.name === 'month') {
          start.stripTime();
      }

      if(end) {
          end.stripTime();
          this.event.end = end.format();
      }

      this.event.id = e.calEvent.id;
      this.event.start = start.format();
      this.event.allDay = e.calEvent.allDay;
      this.dialogVisible = true;
  }

  saveEvent() {
      //update
      if(this.event.id) {
          let index: number = this.findEventIndexById(this.event.id);
          if(index >= 0) {
              this.events[index] = this.event;
          }
      }
      //new
      else {
          this.event.id = this.idGen;
          this.events.push(this.event);
          this.event = null;
      }

      this.dialogVisible = false;
  }

  deleteEvent() {
      let index: number = this.findEventIndexById(this.event.id);
      if(index >= 0) {
          this.events.splice(index, 1);
      }
      this.dialogVisible = false;
  }

  findEventIndexById(id: number) {
      let index = -1;
      for(let i = 0; i < this.events.length; i++) {
          if(id == this.events[i].id) {
              index = i;
              break;
          }
      }

      return index;
  } */

}

/* export class MyEvent {
    id: number;
    title: string;
    start: string;
    end: string;
    allDay: boolean = true;
} */

/* @Injectable()
export class EventService {
    
    constructor(private http: Http) {}

    getEvents() {
        return this.http.get('showcase/resources/data/scheduleevents.json')
                    .toPromise()
                    .then(res => <any[]> res.json().data)
                    .then(data => { return data; });
    }
}
  */