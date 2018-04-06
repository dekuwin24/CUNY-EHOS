import { Component, OnInit, ChangeDetectorRef, Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                 //api
//import * as $ from 'jquery';
//import { WasteRequestService } from '../services/waste-request.service';
import { Observable } from 'rxjs/Observable';
import { element } from 'protractor';


@Component({
    selector: 'app-pickup-requests',
    templateUrl: './pickup-requests.component.html',
    styleUrls: ['./pickup-requests.component.css'],
    // encapsulation: ViewEncapsulation.None
})
export class PickupRequestsComponent implements OnInit {
    requests: Array<Object> = [
        {'title':'Title1', 'request_id':'18E0001','department': 'CHEM', 'operator': 'Jane Doe', 'start': '2018-04-14T14:00:00', 'end': "2018-04-15T14:00:00", 'description': 'good event blablalala'},
        {'title':'Title2',request_id:'18E0002',department: 'PHYS', operator: 'John Smith', requested: '3/5/2018', 'start': '2018-04-10T14:00:00', 'end': "2018-04-12T14:00:00",description: 'good event'},
        {'title':'Title2',request_id:'18E0003',department: 'CHEM', operator: 'Bob Ross', requested: '3/5/2018', 'start': '2018-04-18T14:00:00', 'end': "2018-04-15T14:00:00",description: 'good event'}
    ];
    headerConfig: any;
    dialogVisible: boolean = false;
    constructor(/* private wasteRequestService: WasteRequestService,  */ private cd: ChangeDetectorRef) { }  
    /* 
    getData(){
        this.wasteRequestService.getRequests().subscribe((data)=>{
            if (data) {
                this.requests = {
                    id:  this.wasteRequestService.getRequests().id,
                    url: None,
                    title: this.wasteRequestService.getRequests().department + " " + this.wasteRequestService.getRequests().operator,
                    start: this.wasteRequestService.getRequests().requested,        //date
                    backgroundColor: #FFFFFFF,
                    textColor: #0000000,
        }
    } */
    /* eventRender(event,element) {
        element.popover({
            title: "title",
            content: 'event.description',
            trigger: 'hover',
            placement: 'top',
            container: 'body'
          });
    } */
    ngOnInit() {
        
        this.headerConfig = {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        };
        //this.getData();
    }
    
}

