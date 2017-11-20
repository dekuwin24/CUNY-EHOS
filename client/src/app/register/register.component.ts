import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // Declare a registerForm with datatype of FormGroup
  registerForm: FormGroup;
  // Inside constructor, instantiate FormBuilder class
  constructor( private formBuilder: FormBuilder ) {
    this.createForm();
  }
  // Have method that will create the register form entities
  // Inside the formBuilder class, we have a method group, which will attach our form validation requirements
  createForm(){
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(40),
        this.isValidEmail
      ])],
      phoneNumber: ['', Validators.required],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(40),
        this.isValidPassword
      ])],
      confirmPassword: ['', Validators.required]
    }, {
      validator:this.isMatchingPasswords('password','confirmPassword')
    }
    );
  }
  onRegisterFormSubmit(){
    console.log(this.registerForm);
  }
  // A validator function that uses a regular expression to see if the email entered is a valid format
  isValidEmail(formControl) {
    const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (regExp.test(formControl.value)) {
        return null; // Valid email format!
    }
    else {
      return { 'invalidEmail': true }
    }
  }
  // A validator function that uses a regular expression to check for valid password
  isValidPassword(formControl) {
    // Needs at least a lowercase, uppercase, and a number, and between 8 and 40 chars
    const regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d]).{8,40}$/);
    if (regExp.test(formControl.value)) {
        return null;
    }
    else{
      return { 'invalidPassword': true }
    }
  }
  isMatchingPasswords(password,confirmPassword){
    return (group: FormGroup) => {
      if (group.controls[password].value === group.controls[confirmPassword].value) {
          return null;
      }
      else{
        return { passwordsNoMatch: true }
      }
    }
  }
  ngOnInit(

  ) {
  }

}
