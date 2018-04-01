import { Component, OnInit } from '@angular/core';
import { ITEM } from '../mock';


@Component({
  selector: 'app-waste-request',
  templateUrl: './waste-request.component.html',
  styleUrls: ['./waste-request.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class WasteRequestComponent implements OnInit {

  items = ITEM;

    trash:string;

    constructor() {
      this.trash='/assets/trash.png'
  }


    loadScript(src){
        var script = document.createElement("script");
        script.type = "text/javascript";
        document.getElementsByTagName("body")[0].appendChild(script);
        script.src = src;
      }
    ngOnInit() {
      this.loadScript('./assets/js/table.js')
    }

}
