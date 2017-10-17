import { Component, Input } from '@angular/core';
import { App, AlertController, MenuController } from 'ionic-angular';
import { BaseComponent } from '../base.component';
import { AuthService } from '../../providers/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'user-menu',
  templateUrl: 'user-menu.html'
})
export class UserMenuComponent extends BaseComponent {

  @Input('user') currentUser: User;

  constructor(
    public alertCtrl: AlertController,
    public authService: AuthService,
    public app: App,
    public menuCtrl: MenuController
  ) {
    super(alertCtrl, authService, app, menuCtrl);
  }

  onProfile(){
    this.navCtrl.push('UserProfilePage');
  }

}
