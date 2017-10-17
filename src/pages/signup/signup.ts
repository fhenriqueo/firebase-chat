import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, Loading, LoadingController, AlertController } from 'ionic-angular';
import { UserService } from '../../providers/user.service';
import { AuthService } from '../../providers/auth.service';
import { FirebaseAuthState } from 'angularfire2';
import 'rxjs/add/operator/first';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  signupForm: FormGroup;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public formBuilder: FormBuilder,
      public userService: UserService,
      public authService: AuthService,
      public loadingCtrl: LoadingController,
      public alertCtrl: AlertController
  ) {

    let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

  }

  onSubmit(){

    let loading: Loading = this.showLoading();
    let formUser = this.signupForm.value;
    let username = formUser.username;

    this.userService.userExists(username).first().subscribe((userExists) => {
      if(!userExists){
        this.authService.createAuthUser({
          email: formUser.email,
          password: formUser.password
        }).then((authState: FirebaseAuthState) => {

          delete formUser.password;
          let uuid = authState.auth.uid;

          this.userService.create(formUser, uuid).then(() => {
            loading.dismiss();
            this.navCtrl.setRoot('HomePage');
          }).catch((error) => {
            console.log(error);
            loading.dismiss();
            this.showAlert(error);
          });

        }).catch((error) => {
          console.log(error);
          loading.dismiss();
          this.showAlert(error);
        });
      }else{
        this.showAlert(`O username ${username} já está sendo usado em outra conta!`);
        loading.dismiss();
      }
    });
  }

  private showLoading(): Loading{
    let loading: Loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    return loading;
  }

  private showAlert(message){
    this.alertCtrl.create({
      message: message,
      buttons: ['OK']
    }).present();
  }

}
