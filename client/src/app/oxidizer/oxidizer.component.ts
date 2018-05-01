import { Component, OnInit } from '@angular/core';
import { StorageO} from '../storage';
import { StorageO1 } from '../storage';
import { StorageService } from '../storage.service';


@Component({
  selector: 'app-oxidizer',
  templateUrl: './oxidizer.component.html',
  styleUrls: ['./oxidizer.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class OxidizerComponent implements OnInit {

  selectedDataO: StorageO;
  selectedDataO1: StorageO1;

  datasO: StorageO[];
  datasO1: StorageO1[];

  constructor(private storageService: StorageService) { }



  ngOnInit() {
    this.getDataO();
    this.getDataO1();


  }



  onSelectO(data: StorageO): void {
    this.selectedDataO = data;
  }
  onSelectO1(data1: StorageO1): void {
    this.selectedDataO1 = data1;
  }

  getDataO(): void {
  this.storageService.getDataO()
      .subscribe(datasO => this.datasO = datasO);
  }

  getDataO1(): void {
  this.storageService.getDataO1()
    .subscribe(datasO1 => this.datasO1 = datasO1);
  }


}
