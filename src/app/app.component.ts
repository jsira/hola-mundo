import { LoginPage } from './../pages/login/login';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = '';
  session:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public storage: Storage) {
    platform.ready().then(() => {
      this.storage.ready().then(() => {
        storage.get('session').then((session) => {
          this.session = session;

          if (this.session) {
            this.rootPage = TabsPage;
          } else {
            this.rootPage = LoginPage;
          }
        });
      });
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
