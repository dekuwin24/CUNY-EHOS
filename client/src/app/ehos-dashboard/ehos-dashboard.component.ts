import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-ehos-dashboard',
  templateUrl: './ehos-dashboard.component.html',
  styleUrls: ['./ehos-dashboard.component.css']
  // encapsulation: ViewEncapsulation.None
})
export class EhosDashboardComponent implements OnInit {
  registrations: Array<Object>;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getRegistrations().subscribe( users => {
      var usr = {};
      if (users.success) {
        // TODO: Push the array of objects into the registrations array to be placed onto the html
        // Returns {email, lastname,firstname, privilege, phone }
        // console.log(typeof users.users); OBJ
        // console.log(typeof this.registrations); UNDEFINED
        // console.log(typeof usr); OBJ
        users.users.forEach( item => {
          for (let key in item) {
            if (key === 'firstName' || key === 'lastName') {
              usr[key] = item[key];
            }
          }
          this.registrations.push(usr);
          usr = {};
        });
      }
      else {
        console.log('no users')
      }

    });
  }

}
