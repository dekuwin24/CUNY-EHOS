import { Component, OnInit } from '@angular/core';
import { StorageR} from '../storage';
import { StorageR1 } from '../storage';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-radiation',
  templateUrl: './radiation.component.html',
  styleUrls: ['./radiation.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class RadiationComponent implements OnInit {

  selectedDataR: StorageR;
  selectedDataR1: StorageR1;

  datasR: StorageR[];
  datasR1: StorageR1[];

  constructor(private storageService: StorageService) { }



  ngOnInit() {
    this.getDataR();
    this.getDataR1();


  }



  onSelectR(data: StorageR): void {
    this.selectedDataR = data;
  }
  onSelectR1(data1: StorageR1): void {
    this.selectedDataR1 = data1;
  }

  getDataR(): void {
  this.storageService.getDataR()
      .subscribe(datasR => this.datasR = datasR);
  }

  getDataR1(): void {
  this.storageService.getDataR1()
    .subscribe(datasR1 => this.datasR1 = datasR1);
  }

  deleteRow(id){
          for(let i = 0; i < this.datasR.length; ++i){
              if (this.datasR[i].id === id) {
                  this.datasR.splice(i,1);
              }
          }
      }
      deleteRow1(id){
              for(let i = 0; i < this.datasR1.length; ++i){
                  if (this.datasR1[i].id === id) {
                      this.datasR1.splice(i,1);
                  }
              }
          }

}
