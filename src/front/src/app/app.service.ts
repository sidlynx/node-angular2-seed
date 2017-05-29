import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  static getServerUrl():string {
    return "http://localhost/";
  }
}
