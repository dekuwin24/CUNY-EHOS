import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as moment from 'moment';
import { AccordionModule } from 'primeng/accordion'; 
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { UserService } from "../services/user.service";
@Component({
  selector: 'app-lab-inspections',
  templateUrl: './lab-inspections.component.html',
  styleUrls: ['./lab-inspections.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class LabInspectionsComponent implements OnInit {
    inspectors: any[];
    inspection: any;
    date: Date;
    Room: Number;
    User: Number;
    constructor(private messageService: MessageService, private user: UserService) { 

    }
    
    scheduleInspection() {
        this.inspection = {
          EhosId: this.inspection, // the pickup requester
          start: moment(this.date).format(),
          eventType: 2,
          serviced: false
      }
    }
    ngOnInit() {
        this.inspectors = [
          {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
          {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
          {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
          {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
          {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
        ];
        /* this.user.getUsers().then(response => {// get EHOS members
            this.inspectors = response;
          }).catch(reason => {
            console.log(reason);
      }); */
    }
}


