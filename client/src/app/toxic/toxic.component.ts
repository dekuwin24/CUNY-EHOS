import { Component, OnInit } from '@angular/core';
import { StorageT} from '../storage';
import { StorageT1 } from '../storage';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-toxic',
  templateUrl: './toxic.component.html',
  styleUrls: ['./toxic.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class ToxicComponent implements OnInit {
  selectedDataT: StorageT;
  selectedDataT1: StorageT1;

  datasT: StorageT[];
  datasT1: StorageT1[];

  constructor(private storageService: StorageService) { }



  ngOnInit() {
    this.getDataT();
    this.getDataT1();


  }



  onSelectT(data: StorageT): void {
    this.selectedDataT = data;
  }
  onSelectT1(data1: StorageR1): void {
    this.selectedDataT1 = data1;
  }

  getDataT(): void {
  this.storageService.getDataT()
      .subscribe(datasT => this.datasT = datasT);
  }

  getDataT1(): void {
  this.storageService.getDataT1()
    .subscribe(datasT1 => this.datasT1 = datasT1);
  }


}
