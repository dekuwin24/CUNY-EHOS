import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { UserService } from '../services/user.service'; 
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {
  @ViewChild('email') email: ElementRef;
  @ViewChild('phone') phone: ElementRef;
  @ViewChild('role') role: ElementRef;
  @ViewChild('department') department: ElementRef;
  @ViewChild('building') building: ElementRef;
  @ViewChild('room') room: ElementRef;
  @ViewChild('first') first: ElementRef;
  @ViewChild('last') last: ElementRef;
  originalEmail: String;
  
  constructor(private user: UserService) { }
  getProfile() {
    this.user.getProfile().subscribe((data)=>{
      if (data) {
        this.email.nativeElement.value = data.user.email;
        this.originalEmail = data.user.email;
        this.first.nativeElement.value = data.user.first;
        this.last.nativeElement.value = data.user.last;
        this.phone.nativeElement.value = data.user.phone;
        this.role.nativeElement.value = data.user.role == 1 ? "EHOS" : "Lab Operator";
        this.department.nativeElement.value = data.user.department;
        this.building.nativeElement.value = data.user.building;
        this.room.nativeElement.value = data.user.room;
        
      }
    });
  }
  updateProfile() {
    let userInfo = {
      email: this.email.nativeElement.value,
      first: this.first.nativeElement.value,
      last: this.last.nativeElement.value,
      phone: this.phone.nativeElement.value
    }
    var user = {
      email: this.originalEmail,
      user: userInfo
    }
    this.user.patchProfile(user).subscribe((data) =>{
      console.log(data);
      
    });
  }
  ngOnInit() {
    this.getProfile();
  }

}
