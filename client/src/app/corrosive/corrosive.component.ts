import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { HttpClient, HttpHeaders,HttpResponse} from '@angular/common/http';



@Component({
  selector: 'app-corrosive',
  templateUrl: './corrosive.component.html',
  styleUrls: ['./corrosive.component.css'],
//  encapsulation: ViewEncapsulation.None
})
export class CorrosiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
