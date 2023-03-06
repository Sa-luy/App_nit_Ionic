import { AppInjector } from './../../app/app-injecter';
import { Component , ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { GlobalVars } from '../../app/global';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public myGlobal = AppInjector.get(GlobalVars);


  @ViewChild('slideWithNav') slideWithNav: Slides;
  sliderOne: any;
  //Coverflow
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
    };


  constructor(public navCtrl: NavController) {



    this.sliderOne =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 1,
          path:'https://volamm.zing.vn/index.html'
        },
        {
          id: 2,
          path:'https://ttlm.vnggames.com/index.html'
        },
        {
          id: 3,
          path:'https://ngukiem3d.com/'
        },
        {
          id: 4,
          path:'https://vltkm.vnggames.com/'
        },
        {
          id: 5,
          path:'https://vltkm.zing.vn/su-kien/phien-ban-moi-son-ha-xa-tac/cap-nhat-khac.html'
        }
      ]
    };

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
    // console.log('Open modal login');
    this.myGlobal.openModalByComponentName('LoginComponent')

  }

  ngAfterViewInit() {
    // this.slideWithNav.Slides = 2000;
    this.slideWithNav.isBeginning
    // this.slides.autoplayDisableOnInteraction = false;
}

}
