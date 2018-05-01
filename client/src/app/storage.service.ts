import { Injectable } from '@angular/core';
//import { HttpClient, HttpHeaders,HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {Storage} from './storage';
import {StorageC} from './storage';
import {StorageE} from './storage';
import {StorageE1} from './storage';
import {StorageFl} from './storage';
import {StorageFl1} from './storage';
import {StorageFs} from './storage';
import {StorageFs1} from './storage';
import {StorageG} from './storage';
import {StorageG1} from './storage';
import {StorageO} from './storage';
import {StorageO1} from './storage';
import {StorageR} from './storage';
import {StorageR1} from './storage';
import {StorageT} from './storage';
import {StorageT1} from './storage';
import {StorageM} from './storage';
import {StorageM1} from './storage';
import { StorageData } from './data';
import { StorageDataC } from './data';
import { StorageDataE } from './data';
import { StorageDataE1 } from './data';
import { StorageDataFl } from './data';
import { StorageDataFl1 } from './data';
import { StorageDataFs } from './data';
import { StorageDataFs1 } from './data';
import { StorageDataG } from './data';
import { StorageDataG1 } from './data';
import { StorageDataO } from './data';
import { StorageDataO1 } from './data';
import { StorageDataR } from './data';
import { StorageDataR1 } from './data';
import { StorageDataT } from './data';
import { StorageDataT1 } from './data';
import { StorageDataM } from './data';
import { StorageDataM1 } from './data';


@Injectable()
export class StorageService {

  constructor() {}

  getData(): Observable<Storage[]> {
  return of(StorageData);
}
getDataC(): Observable<StorageC[]> {
return of(StorageDataC);
}


//Explosive
getDataE(): Observable<StorageE[]> {
return of(StorageDataE);
}
getDataE1(): Observable<StorageE1[]> {
return of(StorageDataE1);
}

//Flamable liquid
getDataFl(): Observable<StorageFl[]> {
return of(StorageDataFl);
}
getDataFl1(): Observable<StorageFl1[]> {
return of(StorageDataFl1);
}

//Flamable Solid
getDataFs(): Observable<StorageFs[]> {
return of(StorageDataFs);
}
getDataFs1(): Observable<StorageFs1[]> {
return of(StorageDataFs1);
}

//Gas
getDataG(): Observable<StorageG[]> {
return of(StorageDataG);
}
getDataG1(): Observable<StorageG1[]> {
return of(StorageDataG1);
}
//Oxidizer
getDataO(): Observable<StorageO[]> {
return of(StorageDataO);
}
getDataO1(): Observable<StorageO1[]> {
return of(StorageDataO1);
}

//Radiation
getDataR(): Observable<StorageR[]> {
return of(StorageDataR);
}
getDataR1(): Observable<StorageR1[]> {
return of(StorageDataR1);
}

//Toxic
getDataT(): Observable<StorageT[]> {
return of(StorageDataT);
}
getDataT1(): Observable<StorageT1[]> {
return of(StorageDataT1);
}
//Miscellaneous
getDataM(): Observable<StorageM[]> {
return of(StorageDataM);
}
getDataM1(): Observable<StorageM1[]> {
return of(StorageDataM1);
}

}
