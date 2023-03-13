import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { ApiResponse } from '../../interface';
import{ environment } from '../../../environments/environment';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the RegisterUserComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'register-user',
  templateUrl: 'register-user.html'
})
export class RegisterUserComponent {
  RegisterForm: FormGroup;
  public homePage: HomePage;
  checkbox:boolean = false;


  constructor(
    public viewCtrl:ViewController,
    public navCtrl: NavController,
    public NativeStorage: NativeStorage,

    private http: HttpClient,


    ) {
      this.RegisterForm = new FormGroup({
        name: new FormControl('', [Validators.required, ]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        checkbox: new FormControl('', [Validators.required])
      });

  }
  handleRegisterUser(){
    const data = { name: this.RegisterForm.value.name, password: this.RegisterForm.value.password };
    console.log(environment.urlRegister);



    this.http.post<ApiResponse>(environment.urlRegister, data)
    .subscribe(response => {
      console.log('API response:', response.status);
      if (response.status === 200) {

        //luu trư  phien token vào thiet bị
        this.NativeStorage.setItem('user_info', {api_token: response.token,
                                                  user_id: response.user_id,
                                                  name: response.name,
                                                })
  .then(() => console.log('Stored item!'))
  .catch(error => console.error('Error storing item', error));



        //call api banners

        // set this.slides
      } else {
        console.log('Error:', response.status);
      }
    });
    setTimeout(() => {
      this.navCtrl.pop();
    }, 300);
  }


  handleChange() {
    console.log(this.checkbox);

  }
  closeModalRegister(){
    this.navCtrl.pop()
  }

}
