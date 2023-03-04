import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';
/*
  Generated class for the SmartAudioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SmartAudio {

    audioType: string = 'html5';
    sounds: any = [];

    constructor(public nativeAudio: NativeAudio, platform: Platform) {

        if (platform.is('cordova')) {
            this.audioType = 'native';
        }

    }

    preload(key, asset) {

        if (this.audioType === 'html5') {

            let audio = {
                key: key,
                asset: asset,
                type: 'html5'
            };

            this.sounds.push(audio);

        } else {

            this.nativeAudio.preloadComplex(key, asset, 1, 1, 0);

            let audio = {
                key: key,
                asset: key,
                type: 'native'
            };

            this.sounds.push(audio);
        }

    }
    public audio: any;
    public audioAsset: any;
    play(key) {

        let audio = this.sounds.find((sound) => {
            return sound.key === key;
        });

        if (audio.type === 'html5') {
            if (typeof this.audioAsset !== "undefined") {
                this.audioAsset.pause();
                this.audioAsset.currentTime = 0;


            }
            let audioAsset = new Audio(audio.asset);
            
            audioAsset.play();

        } else {
   
            this.nativeAudio.play(audio.asset).then((res) => {
                //console.log(res);
            }, (err) => {
                //console.log(err);
            });

        }

    }
    loop(key) {

        let audio = this.sounds.find((sound) => {
            return sound.key === key;
        });

        if (audio.type === 'html5') {
            if (typeof this.audioAsset !== "undefined") {
                this.audioAsset.pause();
                this.audioAsset.currentTime = 0;


            }
            let audioAsset = new Audio(audio.asset);
            audioAsset.loop = true;
            audioAsset.play();

        } else {
   
            this.nativeAudio.loop(audio.asset).then((res) => {
                //console.log(res);
            }, (err) => {
                //console.log(err);
            });

        }

    }
    // play(key) {

    //     this.audio = this.sounds.find((sound) => {
    //         return sound.key === key;
    //     });

    //     if (this.audio.type === 'html5') {
    //         if (typeof this.audioAsset !== "undefined") {
    //             this.audioAsset.pause();
    //             this.audioAsset.currentTime = 0;


    //         }

    //         this.audioAsset = new Audio(this.audio.asset);
    //         this.audioAsset.play();

    //     } else {
    //         this.nativeAudio.stop(this.audio.asset).then((res) => {
    //             this.nativeAudio.play(this.audio.asset).then((res1) => {
    //                 //console.log(res1);
    //             }, (err1) => {
    //                 //console.log(err1);
    //             });
    //             //console.log(res);
    //         },(err)=>{
    //             //console.log(err);
    //         });


    //     }

    // }
    stop(key) {
        if (typeof this.audio !== "undefined") {
            //console.log("ok");
            if (this.audio.type === 'html5') {
                //console.log("html5");
                //let audioAsset = new Audio(this.audio.asset);
                if (typeof this.audioAsset !== "undefined") {
                    this.audioAsset.pause();
                    this.audioAsset.currentTime = 0;
                }

            } else {
                //console.log("native");
                this.nativeAudio.stop(this.audio.asset).then((res) => {
                    //console.log(res);
                }, (err) => {
                    //console.log(err);
                });

            }
        }

    }

}