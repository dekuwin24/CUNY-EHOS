import { Component, OnInit } from '@angular/core';
import { Storage } from '../storage';
import { StorageC } from '../storage';
import { StorageService } from '../storage.service';


@Component({
  selector: 'app-corrosive',
  templateUrl: './corrosive.component.html',
  styleUrls: ['./corrosive.component.css'],
//  encapsulation: ViewEncapsulation.None
})
export class CorrosiveComponent implements OnInit {


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
  deleteRow(id){
          for(let i = 0; i < this.datas.length; ++i){
              if (this.datas[i].id === id) {
                  this.datas.splice(i,1);
              }
          }
      }
      deleteRow1(id){
              for(let i = 0; i < this.datasC.length; ++i){
                  if (this.datasC[i].id === id) {
                      this.datasC.splice(i,1);
                  }
              }
          }


}
