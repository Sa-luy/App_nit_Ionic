import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { Swiper } from 'swiper';

/**
 * Generated class for the UploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage {
  @ViewChild('slideWithNav') slideWithNav: Slides;
  link:string ;
  banner: string;
  selectedFile:File=null;
  sliderOne: any;
  userBanner:any = [
    {link:"https://volamm.zing.vn/index.html",
    banner:"./././assets/games/1.jpeg"
  },
    {link:"#1",
    banner:"./././assets/games/2.jpeg"
  },
  ];


  mySwiper: Swiper=new Swiper('.swiper-container', {});
  constructor(public navCtrl: NavController,
     public navParams: NavParams,

       ) { this.sliderOne =
        {
          isBeginningSlide: true,
          isEndSlide: false,
          slidesItems: this.userBanner
        };
      }

  ionViewDidLoad() {
    this.sliderOne = {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: this.userBanner
    };
    console.log(this.userBanner);
    console.log('open UploadPage');

  }
  handleSubmit(){
    if (!this.selectedFile) {
      console.log('No file selected');
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = () => {
      this.banner = reader.result.toString();
      localStorage.setItem('image', this.banner);
      let data = {
        link:this.link,
        banner:this.banner

      }


      this.addBanner(data)
    };
  }
  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }
  addBanner(data:any){
    this.userBanner =[...this.userBanner,data];
    console.log(this.userBanner);
    this.updateSlides();


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
  updateSlides() {
    this.sliderOne.slidesItems = this.userBanner;
    this.slideWithNav.update();
  }



}
