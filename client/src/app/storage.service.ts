import { Injectable } from '@angular/core';
//import { HttpClient, HttpHeaders,HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {Storage} from './storage';
import {StorageC} from './storage';
import { StorageData } from './data';
import { StorageDataC } from './data';


@Injectable()
export class StorageService {

  constructor() {}

  getData(): Observable<Storage[]> {
  return of(StorageData);
}
getDataC(): Observable<StorageC[]> {
return of(StorageDataC);
}



}
