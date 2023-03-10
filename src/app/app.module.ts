import { SettingComponent } from './../components/setting/setting';
import { LoginComponent } from '../components/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, Injector, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { setAppInjector } from './app-injecter';
import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';
import { SmartAudio } from '../providers/smart-audio/smart-audio';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { UploadPage } from '../pages/upload/upload';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { MyApp } from './app.component';
import { ModalPage } from '../pages/modal/modal';
import { GlobalVars } from './global';
import { HomePage } from '../pages/home/home';


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
    HomePage,
    MyApp,
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
    HomePage,
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
