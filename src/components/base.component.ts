import { OnInit } from '@angular/core';
import { App, AlertController, MenuController, NavController } from 'ionic-angular';
import { AuthService } from '../providers/auth.service';

export abstract class BaseComponent implements OnInit {

  protected navCtrl: NavController;

  constructor(
    public alertCtrl: AlertController,
    public authService: AuthService,
    public app: App,
    public menuCtrl: MenuController
  ){}

  ngOnInit(){
    this.navCtrl = this.app.getActiveNav();
  }

  onLogout(){
    this.alertCtrl.create({
      message: 'Você deseja sair?',
      buttons: [
        {
          text: 'Não'
        },
        {
          text: 'Sim',
          handler: () => {
            this.authService.logout().then(() => {
              this.menuCtrl.enable(false, 'user-menu');
              this.navCtrl.setRoot('SigninPage');
            });
          }
        }
      ]
    }).present();
  }

}
