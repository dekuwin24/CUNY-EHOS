import { BrowserModule } from '@angular/platform-browser';
import * as $ from 'jquery';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { Error404Component } from './error404/error404.component';
import { AppRoutingModule } from './app-routing.module';
import { LabOperatorDashboardComponent } from './lab-operator-dashboard/lab-operator-dashboard.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedPrimeNgModule } from './shared-primeng.module';
import { AuthInterceptor } from "./services/interceptor";
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { TextMaskModule } from 'angular2-text-mask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EhosDashboardComponent } from './ehos-dashboard/ehos-dashboard.component';
import { PickupRequestsComponent } from './pickup-requests/pickup-requests.component';
import { EhosQuickViewComponent } from './ehos-quick-view/ehos-quick-view.component';
import { EhosAuthGuard,LabAuthGuard, AnyAuthGuard, ProfileGuard } from "./guards/auth.guard";
import { Error401Component } from './error401/error401.component';
import { LabInspectionsComponent } from './lab-inspections/lab-inspections.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { WasteRequestComponent } from './waste-request/waste-request.component';
import { StorageComponent } from './storage/storage.component';
import { CorrosiveComponent } from './corrosive/corrosive.component';
import { ExplosiveComponent } from './explosive/explosive.component';
import { StorageService } from './storage.service';
import { FlameLComponent } from './flame-l/flame-l.component';
import { FlamableLComponent } from './flamable-l/flamable-l.component';
import { FlamableSComponent } from './flamable-s/flamable-s.component';
import { GasComponent } from './gas/gas.component';
import { OxidizerComponent } from './oxidizer/oxidizer.component';
import { RadiationComponent } from './radiation/radiation.component';
import { ToxicComponent } from './toxic/toxic.component';
import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';
import { HazardComponent } from './hazard/hazard.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    Error404Component,
    LabOperatorDashboardComponent,
    HomeComponent,
    NavbarComponent,
    EhosDashboardComponent,
    PickupRequestsComponent,
    EhosQuickViewComponent,
    Error401Component,
    LabInspectionsComponent,
    AboutComponent,
    ProfileComponent,
    UsersComponent,
    WasteRequestComponent,
    StorageComponent,
    CorrosiveComponent,
    ExplosiveComponent,
    FlameLComponent,
    FlamableLComponent,
    FlamableSComponent,
    GasComponent,
    OxidizerComponent,
    RadiationComponent,
    ToxicComponent,
    MiscellaneousComponent,
    HazardComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedPrimeNgModule,
    ReactiveFormsModule,
    TextMaskModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    UserService,
    EhosAuthGuard,
    LabAuthGuard,
    AnyAuthGuard,
    ProfileGuard,
    StorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
