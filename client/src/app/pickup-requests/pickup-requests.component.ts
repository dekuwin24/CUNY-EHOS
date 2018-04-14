import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WasteManagementService } from '../services/waste-management.service';
import * as moment from 'moment';
import { AccordionModule } from 'primeng/accordion'; 
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

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
    msgs: Message[] = [];
    
    constructor(private waste: WasteManagementService, private messageService: MessageService) {}
    wastePickupDialog(i){
        this.dialog = true;
        this.requestItems = this.requests[Number(i)].items;
    }
    schedulePickup() {
        this.dialog = false;
        let pickup = {
            id: '',// this users id
            start: moment(this.date).format('YYYY-MM-DDThh:mm:ssZ'),
            serviced: false
        }
        this.waste.schedulePickup(pickup).subscribe(
            response => {
                if (!response.success) {
                    this.messageService.add({severity: 'success', summary: 'Scheduled!', detail: 'This request will now appear on your '});                            
                }
                else {
                    this.messageService.add({severity: 'error', summary: 'ERROR!', detail: 'An error occured: \n' + response.message});                                                
                }
              },
            error => {
                this.messageService.add({severity: 'error', summary: 'ERROR!', detail: 'An error occured: \n' + error});                                                
            }
        );
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
