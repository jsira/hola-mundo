import { AuthProvider } from './../../providers/auth/auth';
import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
user: {username?: string, password?: string} = {};
submited: boolean = false;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,     
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private authService: AuthProvider, 
    public storage: Storage) {
  }

  onLogin (form){    
    this.submited = true;
    if(form.valid){
      this.presentLoading();
      this.authService.login(this.user).subscribe((response) =>{     
      this.storage.ready().then(() => {
        this.storage.set('token', response);        
        this.leaveLoading();
        setTimeout(() => { this.navCtrl.setRoot(TabsPage)}, 250);
      });      
      
    }, (err) =>{
        this.leaveLoading();
        this._errorLogin();
      });
    }    
  }

  private _errorLogin(){
    let alert = this.alertCtrl.create({
      title: 'Error Login',
      subTitle: 'Ha ocurrido un error al Iniciar Sesión',
      buttons: [
        {
          text: 'Ok',
          handler: data => {
            this.user.password = "";
          }
        }
      ]
    });

    alert.present();
  }

  loader = this.loadingCtrl.create({
      content: "Espere un momento..."
    });

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Espere un momento..."
    });

    this.loader.present();
  }
 leaveLoading() {
    
    this.loader.dismiss();
  }

}


