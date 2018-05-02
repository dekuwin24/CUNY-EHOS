import { Component, OnInit } from '@angular/core';
import { StorageG } from '../storage';
import { StorageG1 } from '../storage';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-gas',
  templateUrl: './gas.component.html',
  styleUrls: ['./gas.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class GasComponent implements OnInit {


    selectedDataG: StorageG;
    selectedDataG1: StorageG1;

    datasG: StorageG[];
    datasG1: StorageG1[];

    constructor(private storageService: StorageService) { }



    ngOnInit() {
      this.getDataG();
      this.getDataG1();


    }



    onSelectG(data: StorageG): void {
      this.selectedDataG = data;
    }
    onSelectG1(data1: StorageG1): void {
      this.selectedDataG1 = data1;
    }

    getDataG(): void {
    this.storageService.getDataG()
        .subscribe(datasG => this.datasG = datasG);
    }

    getDataG1(): void {
    this.storageService.getDataG1()
      .subscribe(datasG1 => this.datasG1 = datasG1);
    }

    deleteRow(id){
            for(let i = 0; i < this.datasG.length; ++i){
                if (this.datasG[i].id === id) {
                    this.datasG.splice(i,1);
                }
            }
        }
        deleteRow1(id){
                for(let i = 0; i < this.datasG1.length; ++i){
                    if (this.datasG1[i].id === id) {
                        this.datasG1.splice(i,1);
                    }
                }
            }



}
