import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class WasteRequestService {
  domain = "http://localhost:3000";
  constructor(private http: HttpClient) {
  }
  

  getRequests(): Promise<any>{
  let promise = new Promise((resolve,reject) => {
    this.http.get(this.domain + '/ehos/event').toPromise()
    .then(
      res => { // Success
        resolve(res);
     },
     msg => { // Error
       reject(msg);
     });
 });
 return promise;
  /* getRequests(): Observable<any>{
    return this.http.get(this.domain + '/ehos/requests');
  } */
}
}
