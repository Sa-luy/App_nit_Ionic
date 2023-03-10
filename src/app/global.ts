import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { Events, LoadingController, Modal, ModalController, ModalOptions } from "ionic-angular";
import { Injectable, ComponentFactoryResolver, Type, NgModule, NgModuleRef, Component, ComponentFactory, Compiler } from '@angular/core';
import { ModalPage } from "../pages/modal/modal";
import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';
import { SmartAudio } from "../providers/smart-audio/smart-audio";

@Injectable()
export class GlobalVars {
    constructor( public loadingCtrl: LoadingController,
      public modal: ModalController,
      public events: Events,
      public nativeAudio: NativeAudio,
      private nativeStorage: NativeStorage) {
        //console.log("construct GLobalVars")

    }
    public global_factories: any;
    public global_SmartAudio: SmartAudio;
    public volume_music = 0.5;
    public volume_click = 0.5;
    public isLogin = false;


    public openModalByComponentName(comName: string, params: string[] = [""], isSecondPop = false) {
console.log(comName);

      let myModalOption: ModalOptions = {
        enableBackdropDismiss: false,
        showBackdrop: false,
      }
      if(comName=== 'LoginComponent')myModalOption.cssClass = 'modal-login';
      if(comName=== 'SettingComponent')myModalOption.cssClass = 'modal-setting';


        let factoryClass = <Type<any>>this.global_factories.find((x: any) => x.name === comName);

        const myModalData = {
          home: this,
          factory: factoryClass,
          componentName: comName,
          params: params,
          isSecondPop: isSecondPop
        }

        const myModal: Modal = this.modal.create(ModalPage, { data: myModalData }, myModalOption);

        myModal.present();

      }
      public closeModal(){
        this.events.publish('NitCloseModal');
      }


      public play_bg_sound(command){
        switch (command) {
          case "start":
            this.global_SmartAudio.play('bg_sound');
            break;
          case "loop":
            this.global_SmartAudio.loop('bg_sound');
            break;
          case "stop":
            this.global_SmartAudio.stop('bg_sound');
            break;
          default:
            break;
        }

      }
      get_volume_music(): Promise<any> {
        return this.nativeStorage.getItem('nit_volume_music')
            .then(
                data => {
                    this.volume_music = <number>data;
                },
                error => {
                    console.error(error);
                }

            );
    }
    set_volume_music() {
      this.nativeStorage.setItem('nit_volume_music', this.volume_music)
          .then(
              () => console.log('set nit_volume_music'),
              error => console.error('Error storing nit_volume_music', error)
          );
  }
  get_volume_click(): Promise<any> {
    return this.nativeStorage.getItem('nit_volume_click')
        .then(
            data => {
                this.volume_click = <number>data;
            },
            error => {
                console.error(error);
            }

        );
      }
  set_volume_click() {
    this.nativeStorage.setItem('nit_volume_click', this.volume_click)
        .then(
            () => console.log('set nit_volume_click'),
            error => console.error('Error storing nit_volume_click', error)
        );
    }
  setLogin (data:boolean): boolean {
        return this.isLogin=data;
      }





}
