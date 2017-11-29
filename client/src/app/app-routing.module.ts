import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { LabOperatorDashboardComponent } from './lab-operator-dashboard/lab-operator-dashboard.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
// All our routes are stored in this variable
const appRoutes: Routes =[
  {path: '', component: HomeComponent}, // Our default path i.e. our homepage
  {path: 'dashboard', component: DashboardComponent, children: [
    {path: 'dashboard/lab', component: LabOperatorDashboardComponent, outlet: 'dashboardOutlet'}, // Our path to the dashboard for the lab operators
    {path: 'dashboard/ehos', component: LabOperatorDashboardComponent, outlet: 'dashboardOutlet'}, // Our path to the dashboard for the EHOS operators
  ]}, // Our path to the dashboard container
  {path:'**', component: Error404Component} // A path that is not defined
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
