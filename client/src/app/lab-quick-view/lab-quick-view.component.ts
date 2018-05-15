import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-lab-quick-view',
  templateUrl: './lab-quick-view.component.html',
  styleUrls: ['./lab-quick-view.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class LabQuickViewComponent implements OnInit {

  constructor(private user: UserService, private auth: AuthService,private router: Router) { }

  ngOnInit() {
    this.user.getProfile().subscribe(success=>{}, error => {
      if (error.status == 403) {
        this.auth.unsetUser();
        this.router.navigate(['/']);  
      }
    })
    
  }

}
