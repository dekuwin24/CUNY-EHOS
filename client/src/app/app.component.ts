import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Login Template';
  loginFlag = true;
  toggleForms(){
    if (this.loginFlag) {
      this.loginFlag = false;
    }
    else{
      this.loginFlag = true;
    }
  }
}
