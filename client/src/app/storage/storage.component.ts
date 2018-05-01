import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class StorageComponent implements OnInit {


corrisive: string;
explosive:string;
flamableL:string;
flamableS:string;
gas:string;
oxidizer:string;
radiation:string;
toxic:string;
miscellaneous:string;



constructor() {
  this.corrisive='/assets/hazard/corrosive1.png'
  this.explosive='/assets/hazard/explosive1.png'
  this.flamableL='/assets/hazard/flame.png'
  this.flamableS='/assets/hazard/flame.png'
  this.gas='/assets/hazard/gas1.png'
  this.oxidizer='/assets/hazard/oxidizer1.png'
  this.radiation='/assets/hazard/radiation1.png'
  this.toxic='/assets/hazard/toxic1.png'
  this.miscellaneous='/assets/hazard/miscellaneous1.png'
}


  ngOnInit() {
  }

}
