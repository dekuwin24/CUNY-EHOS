import { Component, OnInit } from '@angular/core';
import { WasteManagementService } from '../services/waste-management.service';
import * as moment from 'moment';

@Component({
  selector: 'app-request-history',
  templateUrl: './request-history.component.html',
  styleUrls: ['./request-history.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class RequestHistoryComponent implements OnInit {
  requests: any[];
  
  constructor(private waste: WasteManagementService) { }

  ngOnInit() {
    this.waste.getRequests().then(response =>{
      this.requests = response.requests;
      this.requests.forEach((element) => {
        element.requested = moment(element.requested).format('MMMM Do YYYY');
        });
      
    }).catch(reason=>{});
  }

}
