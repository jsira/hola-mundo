import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GlobalVarsProvider {
  baseUrl;

  constructor() {
    //END POINT
    this.baseUrl = "https://dev.tuten.cl/TutenREST/rest";
  }

  setMyBaseUrl(value) {
    this.baseUrl = value;
  }

  getMyBaseUrl() {
    return this.baseUrl;
  }


}
