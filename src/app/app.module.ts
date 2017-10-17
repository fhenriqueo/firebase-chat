import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { AngularFireModule, FirebaseAppConfig, AuthProviders, AuthMethods } from 'angularfire2';

import { MyApp } from './app.component';
import { UserService } from '../providers/user.service';
import { AuthService } from '../providers/auth.service';
import { ChatService } from '../providers/chat.service';
import { MessageService } from '../providers/message.service';

import { ComponentsModule } from '../components/components.module';

const firebaseAppConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyCo5R8LuSOR6gx8DHJ9i6FfXx3aFBaE-lU",
  authDomain: "ionic2-firebase-chat-124fd.firebaseapp.com",
  databaseURL: "https://ionic2-firebase-chat-124fd.firebaseio.com",
  // projectId: "ionic2-firebase-chat-124fd",
  storageBucket: "ionic2-firebase-chat-124fd.appspot.com",
  messagingSenderId: "317087893621"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Custom,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAppConfig, firebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService,
    AuthService,
    ChatService,
    MessageService
  ]
})
export class AppModule {}
