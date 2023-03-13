import { CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, Injector, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { Camera } from '@ionic-native/camera';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { LoginComponent } from '../components/login/login';
import { UploadPage } from '../pages/upload/upload';
import { SmartAudio } from '../providers/smart-audio/smart-audio';
import { SettingComponent } from './../components/setting/setting';
import { setAppInjector } from './app-injecter';

import { HttpClientModule } from '@angular/common/http';
import { RegisterUserComponent } from '../components/register-user/register-user';
import { HomePage } from '../pages/home/home';
import { ModalPage } from '../pages/modal/modal';
import { MyApp } from './app.component';
import { GlobalVars } from './global';
import { MyService } from '../providers/service/my_service';


// @NgModule({
//   declarations: [
//     MyApp,
//     UploadPage,
//     HomePage,
//     SettingComponent,
//     LoginComponent,
//     RegisterUserComponent,
//     ModalPage
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     HttpClientModule,
//     IonicModule ,
//     ReactiveFormsModule,
//     IonicModule.forRoot(MyApp, {
//       mode: 'ios',
//       scrollPadding: false,
//       scrollAssist: false,
//       autoFocusAssist: false
//     })
//   ],
//   bootstrap: [IonicApp],
//   entryComponents: [
//     HomePage,
//     MyApp,
//     SettingComponent,
//     LoginComponent,
//     RegisterUserComponent,
//     UploadPage,
//     ModalPage,
//   ],
//   providers: [
//     StatusBar,
//     SplashScreen,
//     Camera,
//     GlobalVars,
//     InAppBrowser,
//     NativeAudio,
//     HomePage,
//     SmartAudio,
//     NativeStorage,

//     {provide: ErrorHandler, useClass: IonicErrorHandler}
//   ]
// })
@NgModule({
  declarations: [
    MyApp,
    UploadPage,
    HomePage,
    SettingComponent,
    LoginComponent,
    RegisterUserComponent,
    ModalPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp, {
      mode: 'ios',
      scrollPadding: false,
      scrollAssist: false,
      autoFocusAssist: false
    }),
    IonicModule // Add this line to import the IonicModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [IonicApp],
  entryComponents: [
    HomePage,
    MyApp,
    SettingComponent,
    LoginComponent,
    RegisterUserComponent,
    UploadPage,
    ModalPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    GlobalVars,
    InAppBrowser,
    NativeAudio,
    HomePage,
    SmartAudio,
    NativeStorage,
    MyService,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
  constructor(injector: Injector) {
    setAppInjector(injector);
  }
}
