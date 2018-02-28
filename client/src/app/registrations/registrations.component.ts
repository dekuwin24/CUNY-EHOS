import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Rx';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.css'],
  providers: [MessageService]
  // encapsulation: ViewEncapsulation.None
})
export class RegistrationsComponent implements OnInit {
  registrations = [];
  display: Boolean = false;
  loading: Boolean = false;
  msgs: Message[] = [];
  @ViewChild('email') email: ElementRef;
  @ViewChild('phone') phone: ElementRef;
  @ViewChild('role') role: ElementRef;
  @ViewChild('department') department: ElementRef;
  @ViewChild('building') building: ElementRef;
  @ViewChild('room') room: ElementRef;

  constructor(private authService: AuthService, private messageService: MessageService) { }

  showDialog(i) {
    this.email.nativeElement.value = this.registrations[i].email;
    this.phone.nativeElement.value = this.registrations[i].phone;
    this.role.nativeElement.value = this.registrations[i].privilege == 1 ? "EHOS" : "Lab Operator";
    this.department.nativeElement.value= this.registrations[i].department;
    this.building.nativeElement.value = this.registrations[i].building;
    this.room.nativeElement.value = this.registrations[i].room;
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
    // For this we are using a promise, that way we can easily get a preloader/spinner to show while the request is being sent
    this.authService.approveUser({email: this.email.nativeElement.value, approve: true})
    .then( (response) => {
      this.loading = false;
      this.display = false;
      this.registrations.splice(i, 1);
      this.messageService.add({severity: 'success', summary: 'Approved!', detail: 'User was approved!'});
    });
  }
  closeRejectDialog(i) {
    // Same code as approving a user, except now the approve member is set to false, which will delete record
    this.loading = true;
    // For this we are using a promise, that way we can easily get a preloader/spinner to show while the request is being sent
    this.authService.approveUser({email: this.email.nativeElement.value, approve: false})
    .then( (response) => {
      this.loading = false;
      this.display = false;
      this.registrations.splice(i, 1);
      this.messageService.add({severity: 'danger', summary: 'Denied!', detail: 'User was denied!'});
    });
  }
  ngOnInit() {
    this.authService.getRegistrations().subscribe( users => {
      if (users.success) {
        const usersArr = users.users; // [{user 1 info},{ user 2 info}]
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
