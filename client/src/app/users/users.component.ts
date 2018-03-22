import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs/Rx';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [MessageService]
  // encapsulation: ViewEncapsulation.None
})
export class UsersComponent implements OnInit {
  users = [];
  display: Boolean = false;
  loading: Boolean = false;
  user: Number;
  msgs: Message[] = [];
  approved = new FormControl();
  name: String = '';
  @ViewChild('email') email: ElementRef;
  @ViewChild('phone') phone: ElementRef;
  @ViewChild('role') role: ElementRef;
  @ViewChild('department') department: ElementRef;
  @ViewChild('building') building: ElementRef;
  @ViewChild('room') room: ElementRef;
  
  
  constructor(private userService: UserService, private authService: AuthService, private messageService: MessageService) { }
  openDialog(i) {
    this.user = Number(i); // Save the current user that was selected      
    this.name = this.users[i].first + " " + this.users[i].last;  
    this.email.nativeElement.value = this.users[i].email;
    this.role.nativeElement.value = this.users[i].privilege == 1 ? "EHOS" : "Lab Operator";
    this.department.nativeElement.value= this.users[i].department;
    this.phone.nativeElement.value= this.users[i].phone;    
    this.building.nativeElement.value = this.users[i].building;
    this.room.nativeElement.value = this.users[i].room;
    this.approved.setValue(this.users[i].approved);
    if (this.approved.value) {
      this.approved.disable();
    }
    else {
      this.approved.enable();
    }
    this.display = true;
  }
  updateProfile(i) {
    let userInfo = {
      approved: this.approved.value
    }
    var user = {
      email: this.email.nativeElement.value,
      user: userInfo
    }
    this.userService.patchProfile(user).subscribe((data) =>{
      this.display = false;
      if (data.success) {
        this.messageService.add({severity: 'success', summary: 'Approved!', detail: 'User was approved!'});              
      }
      else {
        this.messageService.add({severity: 'success', summary: 'ERROR!', detail: 'There was some error trying to update. Try again.'});              
      }
      this.approved.reset();
    });
  }
  ngOnInit() {
    this.display = false;
    this.userService.getUsers().then( response => {
      if (response.success) {
        const usersArr = response.users; // [{user 1 info},{ user 2 info}]
        for (let index in usersArr) {
          var temp = {};
          for (let key in usersArr[index]) {
            temp[key] = usersArr[index][key];
          }
          this.users.push(temp); // [...,{temp is pushed}]
        }
      }
      else {
        // No users
      }
    }).catch( reason => {
      console.log(reason);
    });
  }

}
