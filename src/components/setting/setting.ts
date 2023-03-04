import { GlobalVars } from './../../app/global';
import { Component } from '@angular/core';
import { AppInjector } from '../../app/app-injecter';
import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
/**
 * Generated class for the SettingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'setting',
  templateUrl: 'setting.html'
})
export class SettingComponent {

  text: string;
  public myGlobal = AppInjector.get(GlobalVars);
  
  constructor(public nativeAudio: NativeAudio) {
    console.log('Hello SettingComponent Component');
    this.text = 'Hello World';
    if ( this.myGlobal.volume_music != 0.5) this.volume_music = this.myGlobal.volume_music * 100
    if ( this.myGlobal.volume_click != 0.5) this.volume_sound = this.myGlobal.volume_click * 100
    
  }
  
  public volume_music =50;
  public volume_sound =50;
  updateMusicVolume(){
    this.myGlobal.volume_music = this.volume_music/100;
    this.nativeAudio.setVolumeForComplexAsset("bg_sound",this.myGlobal.volume_music);
    this.myGlobal.global_SmartAudio.play('click_sound');
    this.myGlobal.set_volume_music();
  }
  updateSoundVolume(){
    this.myGlobal.volume_click = this.volume_sound/100;
    this.nativeAudio.setVolumeForComplexAsset("click_sound",this.myGlobal.volume_click);
    this.myGlobal.global_SmartAudio.play('click_sound');
    this.myGlobal.set_volume_click();
  }
}
