import { Component, OnInit, Input } from '@angular/core';
import { WasteManagementService }  from '../services/waste-management.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/components/common/api';
@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class StorageComponent implements OnInit {
  corrosive: string;
  explosive:string;
  flamableL:string;
  flamableS:string;
  gas:string;
  oxidizer:string;
  radiation:string;
  toxic:string;
  miscellaneous:string;
  dialog: Boolean = false;
  displayDelete: Boolean = false;
  chemicals: any[] = [];
  hazardClass: String;
  wasteRequest: Number;
  total: Number = 0;
  msgs: Message[] = [];
  
  constructor(private waste: WasteManagementService, private messageService: MessageService) {
    this.corrosive='/assets/hazard/corrosive.png'
    this.explosive='/assets/hazard/explosive.png'
    this.flamableL='/assets/hazard/flamableL.png'
    this.flamableS='/assets/hazard/flamableS.png'
    this.gas='/assets/hazard/gas.png'
    this.oxidizer='/assets/hazard/oxidizer.png'
    this.radiation='/assets/hazard/radiation.png'
    this.toxic='/assets/hazard/toxic.png'
    this.miscellaneous='/assets/hazard/miscellaneous.png'
  }
  getHazardItems(hazardClass) {
    this.dialog = true;
    this.hazardClass = hazardClass;
    this.waste.getHazard(hazardClass).then((response) =>{
      this.chemicals = response.items;
      this.chemicals.forEach((el) =>{
        this.total += el.quantity;
      });
      console.log(this.chemicals);
    });
  }
  deleteStorage(){
    this.waste.deleteWaste(this.hazardClass).subscribe((response) =>{
      this.displayDelete = false;
      this.dialog = false;
      if (response.success) {
        this.messageService.add({severity: 'success', summary: 'Approved!', detail: response.message});    
      }
    }, 
    error =>{
      this.displayDelete = false;
      this.dialog = false;
      this.messageService.add({severity: 'error', summary: 'ERROR!', detail: error.message});
    });
  }
  ngOnInit() {
  }

}
