import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { WasteManagementService } from '../services/waste-management.service';
import 'moment';
import 'fullcalendar';
import {DialogModule} from 'primeng/dialog';
@Component({
  selector: 'app-pickup-scheduler',
  templateUrl: './pickup-scheduler.component.html',
  styleUrls: ['./pickup-scheduler.component.css']
})
export class PickupSchedulerComponent implements OnInit {
    requests: any[];   
    event: object={
        title: "this is example",
        start: "2018-04-04",
        user: "hang",
        email: "zou@gmail.com",
        department: "CCNY Chemistry"
    };
    headerConfig: any;
    dialogVisible: boolean = false;
    constructor(private waste: WasteManagementService) { }  
    
    getData() {
        this.waste.getSchedule().then(response => {
            console.log(response.schedule);
            console.log(this.event);
            this.requests = response.schedule;
            this.requests.push(this.event);
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
    oneventclick(calEvent, jsEvent, view) {
        //alert(calEvent.title);
        this.dialogVisible = true;
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
