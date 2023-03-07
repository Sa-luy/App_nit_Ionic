import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  link:string ;
  banner: string;
  selectedFile:File=null;

  userBanner = Array<{ link: string, banner: string }>();

  mySwiper: Swiper=new Swiper('.swiper-container', {});
  constructor(public navCtrl: NavController,
     public navParams: NavParams,

       ) {}

  ionViewDidLoad() {
    console.log('open UploadPage');
    this.mySwiper = new Swiper('.swiper-container', {});
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
  addBanner(data:object){
    console.log(data);

  }
  //Move to Next slide
  handleNext() {
  //  let mySwiper= this.mySwiper[0];
  //  console.log(this.mySwiper);


     this.mySwiper.slideTo(this.mySwiper.activeIndex + 1);
   ;
}

//Move to previous slide
  handlePrev() {
  this.mySwiper.slidePrev(500);
}



}
