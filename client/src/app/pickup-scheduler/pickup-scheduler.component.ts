import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { WasteManagementService } from '../services/waste-management.service';
import 'moment';
import 'fullcalendar';
@Component({
  selector: 'app-pickup-scheduler',
  templateUrl: './pickup-scheduler.component.html',
  styleUrls: ['./pickup-scheduler.component.css']
})
export class PickupSchedulerComponent implements OnInit {
    requests: any[];   
    headerConfig: any;
    dialogVisible: boolean = false;
    constructor(private waste: WasteManagementService) { }  
    
    getData() {
        this.waste.getSchedule().then(response => {
            console.log(response.schedule);
            
            this.requests = response.schedule;
        },
        error => {
            console.log(error);
            
        }
        );
    }
    eventRender(event,element) {
        element.popover({
            title: "title",
            content: 'event.description',
            trigger: 'hover',
            placement: 'top',
            container: 'body'
          });
    }
    ngOnInit() {
        
        this.headerConfig = {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        };
        this.getData();
    }

}
