import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // Declare a registerForm with datatype of FormGroup
  loginForm: FormGroup;
  // Inside constructor, instantiate FormBuilder class
  constructor( private formBuilder: FormBuilder, private authService: AuthService ) {
    this.createForm(); // create the form upon initialization
  }
  // Have method that will create the register form entities
  createForm(){
    // group method will declare our form controls and also we can apply built in validators
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  // Have a method handler for form submission
  onLoginSubmit(){
    console.log(this.loginForm);

  }


  ngOnInit() {
  }

}
