import { Component, OnInit } from '@angular/core';
import { StorageE } from '../storage';
import { StorageE1 } from '../storage';
import { StorageService } from '../storage.service';


@Component({
  selector: 'app-explosive',
  templateUrl: './explosive.component.html',
  styleUrls: ['./explosive.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class ExplosiveComponent implements OnInit {


  selectedDataE: StorageE;
  selectedDataE1: StorageE1;

  datasE: StorageE[];
  datasE1: StorageE1[];

  constructor(private storageService: StorageService) { }



  ngOnInit() {
    this.getDataE();
    this.getDataE1();


  }



  onSelectE(data: StorageE): void {
    this.selectedDataE = data;
  }
  onSelectE1(data1: StorageE1): void {
    this.selectedDataE1 = data1;
  }

  getDataE(): void {
  this.storageService.getDataE()
      .subscribe(datasE => this.datasE = datasE);
}

getDataE1(): void {
this.storageService.getDataE1()
    .subscribe(datasE1 => this.datasE1 = datasE1);
}

deleteRow(id){
        for(let i = 0; i < this.datasE.length; ++i){
            if (this.datasE[i].id === id) {
                this.datasE.splice(i,1);
            }
        }
    }
    deleteRow1(id){
            for(let i = 0; i < this.datasE1.length; ++i){
                if (this.datasE1[i].id === id) {
                    this.datasE1.splice(i,1);
                }
            }
        }


}
