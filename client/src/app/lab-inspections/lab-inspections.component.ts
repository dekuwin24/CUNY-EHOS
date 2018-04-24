import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as moment from 'moment';
import { AccordionModule } from 'primeng/accordion'; 
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { UserService } from "../services/user.service";
import { SelectItem } from 'primeng/api';
@Component({
  selector: 'app-lab-inspections',
  templateUrl: './lab-inspections.component.html',
  styleUrls: ['./lab-inspections.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class LabInspectionsComponent implements OnInit {
    inspectors: any[];
    inspection: any;
    InspectionRequire: any[];
    date: Date;
    Location: any[];
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
          {name: 'Inspector1'},
          {name: 'Inspector2'},
          {name: 'Inspector3'},
          {name: 'Inspector4'},
          {name: 'Inspector5'}
      ];
        this.Location = [
          {lab: "Nac123"},
          {lab: "MS123"},
          {lab: "Nac133"},
          {lab: "Nac121"},
          {lab: "Nac123"},
        ]
        /* 
          this.user.getUsers().then(response => {// get EHOS members
            this.inspectors = response;
          }).catch(reason => {
            console.log(reason);
          });
        */
    }
}


