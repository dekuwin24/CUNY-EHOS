import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthService {
  domain = "http://localhost:3000";
  constructor(private http: HttpClient) {
  }

  // Function that will submit a post request for the backend to handle
  registerUser(user): Observable<any> {
    return this.http.post(this.domain + "/authentication/register",user);
  }
  loginUser(user): Observable<any> {
    return this.http.post(this.domain + "/authentication/login",user);
  }
  checkEmail(email): Observable<any> {
    return this.http.get(this.domain + "/authentication/checkEmail/" + email);
  }
  getRegistrations(): Observable<any> {
    return this.http.get(this.domain + '/ehos/getRegistrations');
  }
}
