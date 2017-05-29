import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppService} from "./app.service";
import {ApiService} from "./service/api.service";
import {AuthGuard} from "./guard/auth.guard";
import {UserService} from "./service/user.service";
import {AuthenticationService} from "./service/auth.service";

import {routing} from "./ap.routing";

import { AppComponent } from './app.component';
import {HomeComponent} from "./component/home/home.component";
import {LoginComponent} from "./component/login/login.component";
import {RegisterComponent} from "./component/register/register.component";
import {GuestComponent} from "./component/guest/guest.component";

import {HeaderDirective} from "./directive/header/header.directive";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    GuestComponent,
    HeaderDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AppService,
    ApiService,
    AuthGuard,
    AppService,
    AuthenticationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
