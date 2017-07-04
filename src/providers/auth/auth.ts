import { GlobalVarsProvider } from './../global-vars/global-vars';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';


@Injectable()
export class AuthProvider {

  constructor(public http: Http, public globalVarsProvider: GlobalVarsProvider, public storage: Storage) {
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

  logout(){
     this.storage.ready().then(() => {
        this.storage.remove('session');        
      });
  }


}
