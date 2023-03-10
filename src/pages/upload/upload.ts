import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({

  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage implements OnInit {

  @ViewChild('slideWithNav') slideWithNav: Slides;
  link:string ;
  banner: string;
  selectedFile:File=null;
  public homePage: HomePage
  sliderOne: any;
  userBanner:any  ;
  uploadForm: FormGroup;




  constructor(public navCtrl: NavController,public navParams: NavParams, private formBuilder: FormBuilder,
    private http: HttpClient)
   { this.sliderOne ={isBeginningSlide: true, isEndSlide: false,};

  }
  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      url_image: ['', Validators.required],
      link: ['', Validators.required]
    });

  }

  ionViewDidLoad() {

    this.homePage = this.navCtrl.getPrevious().instance as HomePage;
    this.userBanner=this.homePage.sliderOne.slidesItems;
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];


  }
  handleSubmit(){


    const url = 'https://nitgame/banner';
    const formData = new FormData();
    formData.append('link', this.link);
    formData.append('url_image', this.selectedFile);
    console.log(formData);

    this.http.post(url, formData).subscribe(response => {
      console.log('Banner created successfully');
    }, error => {
      console.error('Error creating banner', error);
    });




}



  addBanner(data:any){
    this.userBanner =[...this.userBanner,data];
    const addSlide = this.navParams.get('addSlide');
    addSlide(data);
    this.navCtrl.pop();
  }
}
