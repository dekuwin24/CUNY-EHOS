import { Component, OnInit } from '@angular/core';
import { Storage } from '../storage';
import { StorageC } from '../storage';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-flame-l',
  templateUrl: './flame-l.component.html',
  styleUrls: ['./flame-l.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class FlameLComponent implements OnInit {

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
