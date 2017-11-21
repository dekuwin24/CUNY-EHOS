import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable()
export class AuthService {

  domain = "http://localhost:3000";
  constructor(private http: HttpClient) {
  }

  // Function that will submit a post request for the backend to handle
  registerUser(user) {
    return this.http.post(this.domain + "/authentication/register",user).subscribe(response => {console.log(response)});
  }

}
