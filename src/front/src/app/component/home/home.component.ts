import { Component, OnInit } from '@angular/core';

import { UserModel } from '../../model/user.model';
import { UserService } from '../../service/user.service';

@Component({
  moduleId: module.id,
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
  currentUser: UserModel;

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {

  }
}
