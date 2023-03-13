import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonicPage, ModalController, NavController, NavParams, Slides, ViewController } from 'ionic-angular';
import { MyService } from '../../providers/service/my_service';
import { HomePage } from '../home/home';

@IonicPage()
@Component({

  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage implements OnInit {

  @ViewChild('slideWithNav') slideWithNav: Slides;

  selectedFile:File=null;
  public homePage: HomePage
  sliderOne: any;
  userBanner:any  ;
  id:any;
  uploadForm: FormGroup;




  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    private service: MyService,

     private formBuilder: FormBuilder,
    private http: HttpClient,
    public alertCtrl: AlertController
    ){
      // console.log(this.homePage.user_id); undefined
      // this.id = this.homePage.user_id;
      this.id =1;

       this.sliderOne ={isBeginningSlide: true, isEndSlide: false,};

     }
  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      url_image: ['', Validators.required],
      link: ['', Validators.required],
      user_id: ['']
    });

  }

  ionViewDidLoad() {

    this.homePage = this.navCtrl.getPrevious().instance as HomePage;
    this.userBanner=this.homePage.sliderOne.slidesItems;
  }

  // onFileSelected(event) {
  //   this.selectedFile = <File>event.target.files[0];
  //   console.log(this.selectedFile);
//}
  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.src = reader.result as string;
      img.onload = () => {
        if (img.naturalWidth === 0) {
          console.log("This is not an image.");
        } else {
          console.log("This is an image.");
        }
      };
    };
    reader.readAsDataURL(this.selectedFile);
  }
  handleSubmit(){
    const formData = new FormData();
    formData.append('link', this.uploadForm.value.link);
    formData.append('user_id', this.uploadForm.value.user_id);
    formData.append('url_image', this.selectedFile, this.selectedFile.name);

    this.service.addBanner(formData).subscribe()
      let alert = this.alertCtrl.create({
        title: 'Thành công',
        message: 'Ảnh đã được tải lên thành công!',
        buttons: [{
          text: 'OK',
          handler: () => {
            // Đóng trang hiện tại trở lại trang chủ và tải lại trang chủ
            this.navCtrl.setRoot(HomePage);
          }
        }]
      });
      setTimeout(() => {
        alert.present();
      },500)
    this.viewCtrl.dismiss({ uploaded: true });
  }

}
