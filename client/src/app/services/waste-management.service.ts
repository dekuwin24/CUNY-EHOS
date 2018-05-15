import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WasteManagementService {
  domain = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  getRequests() : Promise<any> {
    let promise = new Promise((resolve, reject) => {
      this.http.get(this.domain + '/waste/pickupRequests').toPromise().then(
        (val) => {
          resolve(val);
        },
        (reason) => {
          reject(reason);
        }
      );
    });
    return promise;
  }
  getRequest(id): Promise<any> {
    let promise = new Promise((resolve, reject) => {
      this.http.get(this.domain + '/waste/pickupRequests/' + id).toPromise().then(
        (val) => {
          resolve(val);
        },
        (reason) => {
          reject(reason);
        }
      );
    });
    return promise;
  }
  isScheduled(request) {
    return this.http.patch(this.domain + '/waste/pickupRequests/' + request._id, request);
  }
  isServiced(request) {
    return this.http.patch(this.domain + '/schedule/' + request._id , request);
  }
  storeWaste(request): Observable<any> {
    return this.http.post(this.domain + '/storage/' + request.hazardClass, request);
  }
  deleteWaste(request): Observable<any> {
    return this.http.delete(this.domain + '/storage/' + request);
  }
  createRequest(request) : Promise<any> {
    let promise = new Promise((resolve, reject) => {
      this.http.post(this.domain + '/waste/pickupRequests',request).toPromise()
      .then(
        (val) => {
          resolve(val);
        },
        (reason) => {
          reject(reason);
        }
      );
    });
    return promise;
  }
  schedulePickup(request): Observable<any> {
    return this.http.post(this.domain + '/schedule/',request);
  }
  getSchedule(): Promise<any> {
    let promise = new Promise((resolve, reject) => {
      this.http.get(this.domain + '/schedule/requests').toPromise()
      .then(
        (val) => {
          resolve(val);
        },
        (reason) => {
          reject(reason);
        }
      );
    });
    return promise;    
  }
  getHazards(): Promise<any> {
    let promise = new Promise((resolve,reject)=>{
      this.http.get(this.domain + '/ehos/hazardClasses').toPromise()
      .then(
        (val) => {
          resolve(val);
        },
        (reason) => {
          reject(reason);
        }
      );
    });
    return promise;
  }
  getHazard(hazardClass): Promise<any> {
    let promise = new Promise((resolve,reject)=>{
      this.http.get(this.domain + '/storage/' + hazardClass).toPromise()
      .then(
        (val) => {
          resolve(val);
        },
        (reason) => {
          reject(reason);
        }
      );
    });
  return promise;
}
}
