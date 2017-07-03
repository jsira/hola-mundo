import { GlobalVarsProvider } from './../global-vars/global-vars';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthProvider {

  constructor(public http: Http, public globalVarsProvider: GlobalVarsProvider) {
  }

  login(data) {
    var baseUrl = this.globalVarsProvider.getMyBaseUrl();
    var srvUrl = '/user/' + data.username;
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Password': data.password,
      'App': 'APP_WEB'
    });

    let options = new RequestOptions({ headers: headers });

    return this.http.put(baseUrl + srvUrl, null, options).map((res) => res.json());
  };


}
