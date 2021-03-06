import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, Loading, LoadingController, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth.service';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  signinForm: FormGroup;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public formBuilder: FormBuilder,
      public authService: AuthService,
      public loadingCtrl: LoadingController,
      public alertCtrl: AlertController
  ) {

    let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    this.signinForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

  }

  onSubmit(){

    let loading: Loading = this.showLoading();

    this.authService.signinWithEmail(this.signinForm.value).then((isLogged: boolean) => {
      if(isLogged){
        this.navCtrl.setRoot('HomePage');
        loading.dismiss();
      }
    }).catch(error => {
      console.log(error);
      loading.dismiss();
      this.showAlert(error);
    });
  }

  onSignup(){
    this.navCtrl.push('SignupPage');
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
