import { AppInjector } from './../../app/app-injecter';
import { Component , ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';


import { GlobalVars } from '../../app/global';
import { UploadPage } from '../upload/upload';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public myGlobal = AppInjector.get(GlobalVars);


  @ViewChild('slideWithNav') slideWithNav: Slides;
  sliderOne: any;
  sliders:any=[
    {
      link:'https://ttlm.vnggames.com/index.html',
      url_image:"https://www.techsignin.com/wp-content/uploads/2016/05/vo-lam-truyen-ky-vinagame-vng.jpg"
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

      ) {
    let uploadPage = new UploadPage(this.navCtrl, this.navParams,);

    this.sliderOne =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems:this.sliders
    };

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
 
    console.log('Open modal ');

  }
  openUpload() {
    this.navCtrl.push(UploadPage, { addSlide: this.addSlide.bind(this) });

  }

  openLink(url: string) {
    const browser = this.iab.create(url,'_self')

  }
  ionViewWillEnter() {
    this.slideWithNav.update();
  }

  ngAfterViewInit() {
    // this.slideWithNav.Slides = 2000;
    this.slideWithNav.isBeginning
    // this.slides.autoplayDisableOnInteraction = false;
}

}
