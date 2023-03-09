import { SettingComponent } from './../components/setting/setting';
import { LoginComponent } from '../components/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, Injector, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ModalPage } from '../pages/modal/modal';
import { GlobalVars } from './global';
import { setAppInjector } from './app-injecter';
import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';
import { SmartAudio } from '../providers/smart-audio/smart-audio';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { Slides } from 'ionic-angular';
import { UploadPage } from '../pages/upload/upload';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@NgModule({
  declarations: [
    MyApp,
    UploadPage,
    HomePage,
    SettingComponent,
    LoginComponent,
    ModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode: 'ios',
      scrollPadding: false,
      scrollAssist: false,
      autoFocusAssist: false
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SettingComponent,
    LoginComponent,
    UploadPage,
    ModalPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GlobalVars,
    InAppBrowser,
    NativeAudio,
    SmartAudio,
    NativeStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
  constructor(injector: Injector) {
    setAppInjector(injector);
  }
}
