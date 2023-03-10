import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiResponse } from '../../interface';

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
  name:string;
  password:string;
  checkbox:boolean = false;


  constructor(
    public navCtrl: NavController,
    private http: HttpClient

    ) {
    console.log('Hello RegisterUserComponent Component');

  }
  handleRegisterUser(){
    const data = { name: this.name, password: this.password };
    const url = "https://630d63c4b37c364eb7036ff7.mockapi.io/users"
    this.http.post<ApiResponse>(url, data)
    .subscribe(response => {
      console.log('API response:', response.status);
      if (response.status === 200) {
        console.log('Success!');
      } else {
        console.log('Error:', response.status);
      }
    });
    setTimeout(() => {
      this.navCtrl.pop();
    }, 300);



  }

  closeModalLogin(){
    setTimeout(() => {
      this.navCtrl.pop();
    }, 300);
  }
  handleChange() {
    console.log(this.checkbox);

  }

}
