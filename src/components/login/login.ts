import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, ViewController } from 'ionic-angular';
import { AppInjector } from '../../app/app-injecter';
import { GlobalVars } from '../../app/global';
import { authService } from '../../providers/service/auth.service';
import { MyService } from '../../providers/service/my_service';

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

  public myGlobal = AppInjector.get(GlobalVars);
  loginForm: FormGroup;


  constructor(public viewCtrl: ViewController,
    public navCtrl: NavController,
     private http: HttpClient,
     private authService: authService,


    ) {

      };


  ngOnInit() {


    this.loginForm = new FormGroup({
      name: new FormControl('', [Validators.required, ]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {

    if (this.loginForm.valid) {
      const name = this.loginForm.value.name;
      const password = this.loginForm.value.password;
      this.authService.login(name, password).subscribe(data =>console.log(data)
      )

      // service call login and change is login
      // this.authService.login(email, password);
      let checkLogin:boolean = true;
      checkLogin? this.myGlobal.setLogin(true):this.myGlobal.setLogin(false)
    }
  }

  closeModalLogin(){
  setTimeout(() => {
    this.navCtrl.pop();
  }, 300);
  }
}
