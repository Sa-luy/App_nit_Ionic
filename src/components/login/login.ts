import { Component, EventEmitter, Output } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { AppInjector } from '../../app/app-injecter';
import { GlobalVars } from '../../app/global';

/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {

  @Output() isLogin = new EventEmitter<boolean>();
  name: string;
  password: string;
  public myGlobal = AppInjector.get(GlobalVars);


  constructor(public viewCtrl: ViewController,
    public navCtrl: NavController,
    ) {
    console.log('open Login Component Component');

  }
  handleLogin() {

    let data_user:object = {
      name: this.name,
      password: this.password
    };
    this.login(data_user)




    this.viewCtrl.dismiss()
  }
  login(data:object) {
    //call api handle login
    let checkLogin:boolean = true;
    checkLogin? this.myGlobal.setLogin(true):this.myGlobal.setLogin(false)

  }


}
