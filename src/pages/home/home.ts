import { AppInjector } from './../../app/app-injecter';
import { Component , ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';


import { GlobalVars } from '../../app/global';
import { UploadPage } from '../upload/upload';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MyService } from '../../providers/service/my_service';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public myGlobal = AppInjector.get(GlobalVars);
  @ViewChild('slideWithNav') slideWithNav: Slides;
  user_name:string;
  user_id:any = 1;
  sliderOne: any;
  sliders:any=[
    {
      link:'',
      url_image:""
    },

  ];
  //Coverflow
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
    };


  constructor(
    public navCtrl: NavController,
      public navParams: NavParams,
      private iab: InAppBrowser,
      private formBuilder: FormBuilder,
      private http: HttpClient,
      private service: MyService,
      public NativeStorage: NativeStorage,

      ) {
        getUserInfo()

    this.service.getBanner(this.user_id).subscribe(data => {
      this.sliders =data;
    });
    this.sliderOne =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems:this.sliders
    };

  }


  getSlider(){
    this.service.getBanner(this.user_id).subscribe(data => {
      this.sliders =data;
    });
  }

  addSlide(item: any) {
    this.sliders.push(item);
  }

  //Move to Next slide
  slideNext(object, slideView: Slides) {

    slideView.slideNext(500);
  }

  //Move to previous slide
  slidePrev(object, slideView: Slides) {
    slideView.slidePrev(500);
  }

  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView: Slides) {

    if (slideView.isBeginning()){
      object.isBeginningSlide = true;
    }else{
      object.isBeginningSlide = false;
    }

  }
  checkisEnd(object, slideView: Slides) {
    // slideView.isEnd().then((istrue) => {
    //   object.isEndSlide = istrue;
    // });
    if (slideView.isEnd()){
      object.isEndSlide = true;
    }else{
      object.isEndSlide = false;
    }
  }

  openSeting(){
    this.myGlobal.global_SmartAudio.play('click_sound');
    this.myGlobal.openModalByComponentName('SettingComponent')
  }

  openModalLogin(){
    this.myGlobal.openModalByComponentName('LoginComponent')


  }
  openModalRegister(){
    this.myGlobal.openModalByComponentName('RegisterUserComponent')

  }
  openUpload() {

    this.myGlobal.openModalByComponentName('UploadPage')
  }


  openLink(url: string) {
    const browser = this.iab.create(url,'_self')

  }
  ionViewWillEnter() {

    this.getSlider()


    // this.slideWithNav.update();
  }


  ngAfterViewInit() {
    // this.slideWithNav.Slides = 2000;
    this.slideWithNav.isBeginning
    // this.slides.autoplayDisableOnInteraction = false;
}

}
async function getUserInfo() {


  //   let user = await this.NativeStorage.getItem('user_info')
  //   .then(data => console.log(data))
  // .catch(error => console.log(error));

    // this.user_id = user.user_id?user.user_id:1;
    // console.log('homepage');
    // console.log(user);

    // this.user_name = user.name?user.name:'Nit';

}
