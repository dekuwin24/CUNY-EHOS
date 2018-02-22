import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Rx';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-ehos-dashboard',
  templateUrl: './ehos-dashboard.component.html',
  styleUrls: ['./ehos-dashboard.component.css'],
  providers: [MessageService]
  // encapsulation: ViewEncapsulation.None
})
export class EhosDashboardComponent implements OnInit {
  registrations = [];
  display: Boolean = false;
  loading: Boolean = false;
  msgs: Message[] = [];
  constructor(private authService: AuthService, private messageService: MessageService) { }

  showDialog(i) {
    document.getElementById("email").value = this.registrations[i].email;
    document.getElementById("phone").value = this.registrations[i].phone;
    document.getElementById("role").value = this.registrations[i].privilege == 1 ? "EHOS" : "Lab Operator";
    document.getElementById("department").value = this.registrations[i].department;
    document.getElementById("building").value = this.registrations[i].building;
    document.getElementById("room").value = this.registrations[i].room;
    this.display = true;
  }
  closeConfirmDialog(i) {
    // Observable solution
    // this.authService.approveUser({email: document.getElementById("email").value, approve: true}).subscribe( feedback => {
    // console.log(feedback);
    // this.display = false;
    // this.registrations.splice(i,1);
    // });
    this.loading = true;
    this.authService.approveUser({email: document.getElementById("email").value, approve: true})
    .then( (response) => {
      this.loading = false;
      this.display = false;
      this.registrations.splice(i,1);
      this.messageService.add({severity:'success', summary:'Approved!', detail:'User was approved!'});
    });
  }
  closeRejectDialog(i) {

  }
  ngOnInit() {
    this.authService.getRegistrations().subscribe( users => {
      if (users.success) {
        var usersArr = users.users; // [{user 1 info},{ user 2 info}]
        for (let index in usersArr) {
          var temp = {};
          for (let key in usersArr[index]) {
            temp[key] = usersArr[index][key];
          }
          this.registrations.push(temp); // [...,{temp is pushed}]
        }
      }
      else {
        console.log('no users')
      }

      console.log(this.registrations);
    });
  }

}
