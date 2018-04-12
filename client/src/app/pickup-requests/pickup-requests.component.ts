import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WasteManagementService } from '../services/waste-management.service';
import * as moment from 'moment';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab

@Component({
  selector: 'app-pickup-requests',
  templateUrl: './pickup-requests.component.html',
  styleUrls: ['./pickup-requests.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class PickupRequestsComponent implements OnInit {
    requests: any[];
    requestItems: any[];
    date: Date;
    dialog: Boolean = false;
    constructor(private waste: WasteManagementService) {}
    wastePickupDialog(i){
        this.dialog = true;
        this.requestItems = this.requests[Number(i)].items;
    }
    
    ngOnInit() {
        this.waste.getRequests().then(response => {
            this.requests = response.requests;
            this.requests.forEach(element => {
                element.requested = moment(element.requested).format('MMMM Do YYYY');
            });
        }).catch(reason => {
            console.log(reason);
            
        });
    }

}
