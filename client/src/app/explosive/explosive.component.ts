import { Component, OnInit } from '@angular/core';
import { Storage } from '../storage';
import { StorageC } from '../storage';

//import { StorageData } from '../data';
import { StorageService } from '../storage.service';


@Component({
  selector: 'app-explosive',
  templateUrl: './explosive.component.html',
  styleUrls: ['./explosive.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class ExplosiveComponent implements OnInit {


  selectedData: Storage;
  selectedDataC: StorageC;

  datas: Storage[];
  datasC: StorageC[];

  constructor(private storageService: StorageService) { }



  ngOnInit() {
    this.getData();
    this.getDataC();


  }



  onSelect(data: Storage): void {
    this.selectedData = data;
  }
  onSelectC(data1: StorageC): void {
    this.selectedDataC = data1;
  }

  getData(): void {
  this.storageService.getData()
      .subscribe(datas => this.datas = datas);
}

getDataC(): void {
this.storageService.getDataC()
    .subscribe(datasC => this.datasC = datasC);
}


}
