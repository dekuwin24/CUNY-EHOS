import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
import { WasteManagementService } from '../services/waste-management.service';
import * as moment from 'moment';
import 'fullcalendar';
import {DialogModule} from 'primeng/dialog';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { FormControl} from '@angular/forms';
import { LabInspectionService } from '../services/lab-inspection.service';
import { Router } from '@angular/router';
import {AuthService } from '../services/auth.service';
@Component({
  selector: 'app-pickup-scheduler',
  templateUrl: './pickup-scheduler.component.html',
  styleUrls: ['./pickup-scheduler.component.css'],
  providers: [MessageService]
})
export class PickupSchedulerComponent implements OnInit {
    requests: any[];
    loading: Boolean = false;
    displayService: Boolean = false;
    serviced = new FormControl();
    selectedRequest: any = {};
    headerConfig: any;
    dialogVisible: boolean = false;
    msgs: Message[] = [];
    
    constructor(private waste: WasteManagementService, private messageService: MessageService, 
      private insp: LabInspectionService, private router: Router, 
      private user: AuthService) { }  
    
    getData() {
        this.loading = true;
        this.serviced.disable()
        this.waste.getSchedule().then(response => {
            console.log(response.schedule);
            this.loading = false;
            this.requests = response.schedule;
            this.requests.forEach((element,index)=>{
              if (element.eventType === 1){
                this.requests[index]["color"]="#ff71fe";
              }else{
                this.requests[index]["color"]="#7FFF00";
              }
              
            },err=>{
              console.log(err);
            })
        },
        error => {
          if (error.status === 403) {
            this.user.unsetUser();
            this.router.navigate(['/']);
          }
          this.loading = false;
        }).catch(reason => {
          console.log(reason);
          this.loading = false;
        });
    }
    oneventclick(e) {
        this.dialogVisible = true;
        Object.assign(this.selectedRequest, e.calEvent); // Create immutability on calEvent  
        this.loading = true;
        if (this.selectedRequest.eventType == 1) {
          this.waste.getRequest(e.calEvent.requestId).then(data => {
            this.selectedRequest.requested = moment(this.selectedRequest.start).format("hh:mm a");
            this.selectedRequest.location = data.request.location; // Later will be inner join
            this.selectedRequest.requester = data.request.userId; // Later will be inner join
            this.selectedRequest.items = data.request.items;
            this.serviced.setValue(this.selectedRequest.serviced);
            this.loading = false;
          }).catch( reason => {
  
          });
        }
        else {
          this.insp.getRequest(e.calEvent.requestId).then( data =>{
            this.selectedRequest.requested = moment(data.inspection.requested).format("MMMM Do YYYY hh:mm a");
            this.selectedRequest.start = moment(this.selectedRequest.start).format("hh:mm a")
            this.selectedRequest.location = data.inspection.lab;
            this.selectedRequest.requester = data.inspection.inspector;
            this.serviced.setValue(this.selectedRequest.serviced);
            this.loading = false;
          }).catch(reason =>{

          });
        }

    }
    serviceRequest() {
      // TODO
      this.displayService = false;
      let request = {
        _id: this.selectedRequest._id, // scheduled id 
        id: this.selectedRequest.requestId, // request id 
        eventType: this.selectedRequest.eventType, 
        serviced: true
      }
      console.log(this.selectedRequest.items);
      
      this.waste.isServiced(request).subscribe(data => {
          this.dialogVisible = false;
          
          this.messageService.add({severity: 'success', summary: 'Done!', detail: 'Request was serviced!'});      
          var temp = this.requests; // create a copy
          var temp_index = this.requests.findIndex(el => el._id == this.selectedRequest._id);
          temp[temp_index].serviced = true;
          this.selectedRequest.items.forEach((element,index) => {
            element.requestId = temp[temp_index].requestId;
            this.waste.storeWaste(element).subscribe(data=>{

            },error=>{
              console.log(error);
              
            });
          });
          this.requests = this.requests.filter(request => request._id != this.selectedRequest._id); // remove it from list
          setTimeout(()=>{
            return this.requests = temp;
          }, 3000);
          
        },
        error => {
          if (error.status === 403) {
            // redirect to login page
            console.log("Your session has timed out, returning to login screen");
            this.user.unsetUser();
            this.router.navigate(['/']);
          }
        }
      );
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
