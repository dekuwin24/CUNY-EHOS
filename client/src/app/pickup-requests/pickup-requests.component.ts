import { Component, OnInit, ChangeDetectorRef, Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                 //api
//import * as $ from 'jquery';
import { WasteRequestService } from '../services/waste-request.service';
import { Observable } from 'rxjs/Observable';
import { element } from 'protractor';


@Component({
    selector: 'app-pickup-requests',
    templateUrl: './pickup-requests.component.html',
    styleUrls: ['./pickup-requests.component.css'],
    // encapsulation: ViewEncapsulation.None
})
export class PickupRequestsComponent implements OnInit {
    requests: any[];   
    headerConfig: any;
    dialogVisible: boolean = false;
    constructor(private wasteRequestService: WasteRequestService,  private cd: ChangeDetectorRef) { }  
    
    getData(){
        this.wasteRequestService.getRequests().then(response => {
            console.log(response);
            
        },
            error => {
                console.log(error);
                
            }
        
        )
    }
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
        this.getData();
    }
    
}

