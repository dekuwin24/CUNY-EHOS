import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { LabOperatorDashboardComponent } from './lab-operator-dashboard/lab-operator-dashboard.component';
import { RegistrationsComponent } from './registrations/registrations.component';
import { EhosQuickViewComponent } from "./ehos-quick-view/ehos-quick-view.component";
import { EhosDashboardComponent } from './ehos-dashboard/ehos-dashboard.component';
import { PickupRequestsComponent } from './pickup-requests/pickup-requests.component';
import { LabInspectionsComponent } from './lab-inspections/lab-inspections.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EhosAuthGuard,LabAuthGuard,AnyAuthGuard } from "./guards/auth.guard";
import {AboutComponent} from "./about/about.component";
// All our routes are stored in this variable
const appRoutes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AnyAuthGuard]}, // Our default path i.e. our homepage
  {path: 'ehos', component: EhosDashboardComponent, canActivate: [EhosAuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'registrations', component: RegistrationsComponent },
      { path: 'pickup-requests', component:  PickupRequestsComponent},
      { path: 'lab-inspections', component:  LabInspectionsComponent},
      { path: 'dashboard', component:  EhosQuickViewComponent}
    ]
  }, // Our path to the EHOS
  {path:'about', component:AboutComponent},
  {path: 'lab', component: LabOperatorDashboardComponent, canActivate: [LabAuthGuard]},
  {path: '**', component: Error404Component} // A path that is not defined
];

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forRoot(appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: []
})
export class AppRoutingModule { }
