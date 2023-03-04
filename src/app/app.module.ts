import { SettingComponent } from './../components/setting/setting';
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


@NgModule({
  declarations: [
    MyApp,

    HomePage,
    SettingComponent,
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
    ModalPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GlobalVars,
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
