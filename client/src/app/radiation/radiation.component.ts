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


}
