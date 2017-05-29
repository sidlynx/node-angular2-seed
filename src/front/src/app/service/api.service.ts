import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import "rxjs/add/operator/catch";

import {AppService} from '../app.service';

@Injectable()
export class ApiService {
  constructor(private http: Http) {
  }

  call(module: string, method: string, data: any):Observable<Response> {
    return this.http.post(AppService.getServerUrl() + "api",JSON.stringify(data));
  }
}
