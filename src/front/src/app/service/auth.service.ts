import { Injectable } from '@angular/core';
import { Http, Headers, Response,RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import "rxjs/add/operator/catch";

import {AppService} from '../app.service';

@Injectable()
export class AuthenticationService {
  constructor(private http:Http,private router:Router) { }

  /**
   *
   * @param username
   * @param password
   */
  login(username: string, password: string){
    let data = {"username":username,"password":password};

    let params = new URLSearchParams();
    params.append('username', username);
    params.append('password', password);

    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let options = new RequestOptions({ headers: headers });

    return this.http.post(AppService.getServerUrl() + "auth", params.toString(),options)
      .map((response:Response)=>{
        let user = response.json();
        localStorage.setItem('currentUser',JSON.stringify(user));
        return response;
      }).catch((error:Response|any)=>{
        return null;
    })
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(["/"]);
  }
}
