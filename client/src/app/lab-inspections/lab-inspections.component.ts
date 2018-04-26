import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as moment from 'moment';
import { AccordionModule } from 'primeng/accordion'; 
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { UserService } from "../services/user.service";
import { SelectItem } from 'primeng/api';
import { WasteManagementService } from '../services/waste-management.service';
import { log } from 'fullcalendar/src/util';
@Component({
  selector: 'app-lab-inspections',
  templateUrl: './lab-inspections.component.html',
  styleUrls: ['./lab-inspections.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class LabInspectionsComponent implements OnInit {
    inspectors: any[];
    inspection: any;
    inspector: any[];
    InspectionRequire: any[]; // store inspect request
    date: Date[];
    Location: any[];
    User: Number;
    constructor(private messageService: MessageService, private user: UserService, private waste: WasteManagementService) { 

    }
    
    scheduleInspection(request) {
        this.inspection = {
          EhosId: request._id, 
          start: moment(request.date).format(),
          eventType: 2,
          serviced: false
      }
      this.waste.schedulePickup(this.inspection).subscribe(res=>{
        console.log("push request");
      }, err => {
        console.log(err);
      })
    }
    ngOnInit() {

      /*   this.InspectionRequire = [
            {id: 1, name: "inspect1", location: "Nac 121", requested: "April 30 2018"},
            {id: 2, name: "inspect2", location: "Nac 1221", requested: "April 27 2018"}
        ]; */
        
        this.user.getUsers().then(response => {// get EHOS members
          this.inspectors = response.users;
          
          this.inspectors.forEach((element, index)=>{
            this.inspectors[index]["name"] = element.first + ' ' + element.last;
          })
          console.log(this.inspectors);

        }).catch(reason => {
          console.log(reason);
        });

        this.waste.getRequests().then(response => {
            this.InspectionRequire = response.requests;
            this.InspectionRequire.forEach((element) => {
                element.requested = moment(element.requested).format('MMMM Do YYYY');
                element['date'] = null;  
                element['inspector'] = null;
              });
            }).catch(reason => {
                if (reason.status === 403) {
                  // redirect to login page
                  console.log("Your session has timed out, returning to login screen");
                }
        }).then( done =>{
            this.InspectionRequire.forEach((element,index) => {
                this.user.getUser(element.userId).subscribe(response => {
                    this.InspectionRequire[index].name = response.user.first + " " + response.user.last;
                });
            });
        });
    }
}


