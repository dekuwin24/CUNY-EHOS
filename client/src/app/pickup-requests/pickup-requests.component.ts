import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pickup-requests',
  templateUrl: './pickup-requests.component.html',
  styleUrls: ['./pickup-requests.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class PickupRequestsComponent implements OnInit {
  requests: Array<Object> = [{request_id:'18E0001',department: 'CHEM', operator: 'Jane Doe', requested: '3/5/2018'},{request_id:'18E0002',department: 'PHYS', operator: 'John Smith', requested: '3/5/2018'},{request_id:'18E0003',department: 'CHEM', operator: 'Bob Ross', requested: '3/5/2018'}];
  constructor() { }

  ngOnInit() {
  }

}
