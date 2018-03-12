import { BrowserModule } from '@angular/platform-browser';
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
import { AuthService } from './services/auth.service';
import { AuthInterceptor } from "./services/interceptor";
import { TextMaskModule } from 'angular2-text-mask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EhosDashboardComponent } from './ehos-dashboard/ehos-dashboard.component';
import { RegistrationsComponent } from './registrations/registrations.component';
import { PickupRequestsComponent } from './pickup-requests/pickup-requests.component';
import { EhosQuickViewComponent } from './ehos-quick-view/ehos-quick-view.component';
import { EhosAuthGuard,LabAuthGuard, AnyAuthGuard } from "./guards/auth.guard";
import { Error401Component } from './error401/error401.component';
import { LabInspectionsComponent } from './lab-inspections/lab-inspections.component';
import { AboutComponent } from './about/about.component';
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
    RegistrationsComponent,
    PickupRequestsComponent,
    EhosQuickViewComponent,
    Error401Component,
    LabInspectionsComponent,
    AboutComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedPrimeNgModule,
    ReactiveFormsModule,
    TextMaskModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    EhosAuthGuard,
    LabAuthGuard,
    AnyAuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
