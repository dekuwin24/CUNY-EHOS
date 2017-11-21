import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    Error404Component,
    LabOperatorDashboardComponent,
    HomeComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedPrimeNgModule,
    ReactiveFormsModule,
    TextMaskModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
