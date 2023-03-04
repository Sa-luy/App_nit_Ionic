import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';
import { Component, Type, ComponentFactoryResolver } from '@angular/core';
import { Modal, ModalOptions, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppInjector } from './app-injecter';
import { GlobalVars } from './global';

import { HomePage } from '../pages/home/home';
import { SmartAudio } from '../providers/smart-audio/smart-audio';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  public myGlobal = AppInjector.get(GlobalVars);
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public resolver: ComponentFactoryResolver, smartAudio: SmartAudio,public nativeAudio: NativeAudio) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.myGlobal.global_factories = Array.from(this.resolver['_factories'].keys());

       this.myGlobal.global_SmartAudio = smartAudio;
      // this.myGlobal.nativeAudio.preloadSimple('bg_sound', 'assets/sounds/bg_audio.mp3').then(this.myGlobal.onSuccessSoundbg, this.myGlobal.onErrorSound);
      // this.myGlobal.nativeAudio.preloadSimple('click_sound', 'assets/sounds/click.wav').then(this.myGlobal.onSuccessSound,this.myGlobal.onErrorSound);
      this.myGlobal.global_SmartAudio.preload('bg_sound', 'assets/sounds/bg_audio.mp3');
      this.myGlobal.global_SmartAudio.preload('click_sound', 'assets/sounds/click.wav');
      setTimeout(() => {
        this.myGlobal.play_bg_sound('loop')

        this.myGlobal.get_volume_music().then(() => {
          this.nativeAudio.setVolumeForComplexAsset("bg_sound",this.myGlobal.volume_music);
        });
        this.myGlobal.get_volume_click().then(() => {
          this.nativeAudio.setVolumeForComplexAsset("click_sound",this.myGlobal.volume_click);
        });
      }, 2000);

     

    });
  }
 
}

