import { Component,OnInit } from '@angular/core';
import { UserModel } from '../../model/user.model';

import {AuthenticationService} from "../../service/auth.service";

@Component({
  moduleId : module.id,
  selector:"app-header",
  templateUrl : "./header.directive.html"
})

export class HeaderDirective implements OnInit {
  currentUser : UserModel;
  constructor(private auth:AuthenticationService){}
  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  logout(){
    this.auth.logout();
  }
}
