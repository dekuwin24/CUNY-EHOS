import { Component, OnInit, Input } from '@angular/core';
import { WasteManagementService } from '../services/waste-management.service';
import { InputText } from 'primeng/primeng';
@Component({
  selector: 'app-storage-list',
  templateUrl: './storage-list.component.html',
  styleUrls: ['./storage-list.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class StorageListComponent implements OnInit {
  displayDelete: Boolean = false;
  @Input() input: any[];
  constructor() { }

  ngOnInit() {
    console.log(this.input);
    
  }

}
