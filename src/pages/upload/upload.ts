import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { AppInjector } from '../../app/app-injecter';
import { HomePage } from '../home/home';

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
  public homePage: HomePage
  sliderOne: any;
  userBanner:any  ;



  constructor(public navCtrl: NavController,
     public navParams: NavParams,


       ) {
        this.sliderOne =
    {
      isBeginningSlide: true,
      isEndSlide: false,
    }
        }

  ionViewDidLoad() {

    this.homePage = this.navCtrl.getPrevious().instance as HomePage;
    this.userBanner=this.homePage.sliderOne.slidesItems;
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
        url_image:this.banner
      }
      this.addBanner(data)
    };
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  addBanner(data:any){
    this.userBanner =[...this.userBanner,data];
    const addSlide = this.navParams.get('addSlide');
    addSlide(data);
    this.navCtrl.pop();
  }
}
