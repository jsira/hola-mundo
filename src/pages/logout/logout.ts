import { LoginPage } from './../login/login';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private authService: AuthProvider) {
      
  }
 

  logout() {
    this.authService.logout();    
    this.navCtrl.parent.parent.setRoot(LoginPage);
  }

}
