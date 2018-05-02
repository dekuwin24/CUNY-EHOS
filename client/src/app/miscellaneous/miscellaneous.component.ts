import { Component, OnInit } from '@angular/core';
import { StorageM} from '../storage';
import { StorageM1 } from '../storage';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-miscellaneous',
  templateUrl: './miscellaneous.component.html',
  styleUrls: ['./miscellaneous.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class MiscellaneousComponent implements OnInit {

      selectedDataM: StorageM;
      selectedDataM1: StorageM1;

      datasM: StorageM[];
      datasM1: StorageM1[];

      constructor(private storageService: StorageService) { }



      ngOnInit() {
        this.getDataM();
        this.getDataM1();


      }



      onSelectG(data: StorageM): void {
        this.selectedDataM = data;
      }
      onSelectG1(data1: StorageM1): void {
        this.selectedDataM1 = data1;
      }

      getDataM(): void {
      this.storageService.getDataM()
          .subscribe(datasM => this.datasM = datasM);
      }

      getDataM1(): void {
      this.storageService.getDataM1()
        .subscribe(datasM1 => this.datasM1 = datasM1);
      }

      deleteRow(id){
              for(let i = 0; i < this.datasM.length; ++i){
                  if (this.datasM[i].id === id) {
                      this.datasM.splice(i,1);
                  }
              }
          }
          deleteRow1(id){
                  for(let i = 0; i < this.datasM1.length; ++i){
                      if (this.datasM1[i].id === id) {
                          this.datasM1.splice(i,1);
                      }
                  }
              }

}
