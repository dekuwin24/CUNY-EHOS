import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { LabOperatorDashboardComponent } from './lab-operator-dashboard/lab-operator-dashboard.component';
import { EhosQuickViewComponent } from "./ehos-quick-view/ehos-quick-view.component";
import { EhosDashboardComponent } from './ehos-dashboard/ehos-dashboard.component';
import { PickupRequestsComponent } from './pickup-requests/pickup-requests.component';
import { LabInspectionsComponent } from './lab-inspections/lab-inspections.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EhosAuthGuard,LabAuthGuard,AnyAuthGuard, ProfileGuard } from "./guards/auth.guard";
import {AboutComponent} from "./about/about.component";
import { UsersComponent } from './users/users.component';
import {WasteRequestComponent} from './waste-request/waste-request.component';
import {StorageComponent} from './storage/storage.component';
import {CorrosiveComponent} from './corrosive/corrosive.component';
import { ExplosiveComponent } from './explosive/explosive.component';
import { FlamableLComponent } from './flamable-l/flamable-l.component';
import { FlamableSComponent } from './flamable-s/flamable-s.component';
import { GasComponent } from './gas/gas.component';
import { OxidizerComponent } from './oxidizer/oxidizer.component';
import { RadiationComponent } from './radiation/radiation.component';
import { ToxicComponent } from './toxic/toxic.component';
import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';
import { HazardComponent} from './hazard/hazard.component';


// All our routes are stored in this variable
const appRoutes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AnyAuthGuard]}, // Our default path i.e. our homepage
  {path: 'ehos', component: EhosDashboardComponent, canActivate: [EhosAuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'users', component: UsersComponent },
      { path: 'pickup-requests', component:  PickupRequestsComponent},
      { path: 'lab-inspections', component:  LabInspectionsComponent},
      { path: 'dashboard', component:  EhosQuickViewComponent}
    ]
  }, // Our path to the EHOS
  {path:'storage',component:StorageComponent,canActivate: [EhosAuthGuard],
  children:[
    { path: '', redirectTo: 'hazard', pathMatch: 'full' },
    {path: 'hazard',component:HazardComponent},
    {path:'corrosive',component:CorrosiveComponent},
    {path:'explosive',component:ExplosiveComponent},
    {path:'flameLiquid',component:FlamableLComponent},
    {path:'flameSolid',component:FlamableSComponent},
    {path:'gas',component:GasComponent},
    {path:'oxidizer',component:OxidizerComponent},
    {path:'radiation',component:RadiationComponent},
    {path:'toxic',component:ToxicComponent},
    {path:'miscellaneous',component:MiscellaneousComponent},

  ]
},
  {path:'waste', component:WasteRequestComponent},
  {path:'about', component:AboutComponent},
  {path: 'lab', component: LabOperatorDashboardComponent, canActivate: [LabAuthGuard]},
  { path: 'profile', component:  ProfileComponent, canActivate: [ProfileGuard] },
  { path: '**', component: Error404Component } // A path that is not defined
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
