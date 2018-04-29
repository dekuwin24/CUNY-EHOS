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
import { and } from '@angular/router/src/utils/collection';
@Component({
  selector: 'app-lab-inspections',
  templateUrl: './lab-inspections.component.html',
  styleUrls: ['./lab-inspections.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class LabInspectionsComponent implements OnInit {
    inspectors: any[];
    //inspection: any;
    history: any[];
    InspectionRequire: any[]; // store inspect request
    date: Date[];
    Location: any[];
    User: Number;
    constructor(private messageService: MessageService, private user: UserService, private waste: WasteManagementService) { 

    }
    
    scheduleInspection(request) {
        let inspection = {
          requestId: request._id,
          start: moment(request.date).format(),
          eventType: 2,
          serviced: false
        }
        this.waste.schedulePickup(inspection).subscribe(res=>{
            console.log(request._id);
            this.waste.isScheduled({_id:request._id, pending:false}).subscribe(valid =>{},error =>{
              this.messageService.add({severity: 'error', summary: 'ERROR!', detail: 'An error occured: \n' + res.message});                                                                        
            });
            request.pending = false; // Update the local array   
            this.messageService.add({severity: 'success', summary: 'Scheduled!', detail: 'Request has been scheduled! Take a look at the updated schedule to make further updates.'}); 
          }, err => {
            
            console.log(err);
          })
    }
    getData() {
      this.waste.getSchedule().then(response => {
          this.history = response.schedule;
          for(let i = 0; i<this.history.length; i++){
            if(this.history[i].eventType === 1 && this.history[i].serviced === true){
              console.log(this.history[i]);
              this.history[i].start = moment(this.history[i].start, "YYYY-MM-DDTHH:mm:ss").format("YYYY-MM-DD HH:mm");
              this.waste.getRequest(this.history[i].requestId).then(res=>{
                console.log(res);
                this.history[i]["location"] = res.request.location;
                this.history[i]["requested"] = res.request.requested;
              },err=>{});
            }
            else{
              this.history.splice(i, 1);
              i--;
            }
          };
          console.log("--------------------------->",this.history);
      },
      error => {
        console.log(error);
      });
  }
    ngOnInit() {
        this.user.getUsers().then(response => {// get EHOS members
          this.inspectors = response.users;
          this.inspectors.forEach((element, index)=>{
            if(element.privilege === 1 && element.approved === true){
              this.inspectors[this.inspectors.indexOf(element)]["name"] = element.first + ' ' + element.last;
            };            
          });
          for(var i = 0; i<this.inspectors.length;i++){
            if(this.inspectors[i].privilege === 2 || this.inspectors[i].approved === false){
              this.inspectors.splice(i, 1);
              i--;
            }
          };
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
              console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXX----------------->",this.InspectionRequire);
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
        this.getData();
    }
}


