import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { User } from '../../../src/interface';



@Injectable()
export class authService {
  public userSubject: BehaviorSubject<User>;
  public _userManager: any;
  public user: Observable<User>;
  token: any;

  constructor(private http: HttpClient,) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
  }
  login(name: string, password: string): Observable<any> {
      // code to log in the user
      return this.http.post<any>(environment.urlLogin, { name, password });
    }

    // .subscribe(
    //   response => {
    //     console.log(response); // log response từ server
    //     // xử lý response ở đây
    //   },
    //   error => {
    //     console.error(error); // log lỗi nếu có
    //     // xử lý lỗi ở đây
    //   }
    // );
    // return this.http.post(environment.urlLogin, { name, password }).pipe(
  //     map((token) => {
  //       let user: User = {
  //         name: name,
  //         token: token,
  //       };
  //       localStorage.setItem('currentUser', JSON.stringify(user));
  //       this.userSubject.next(user);
  //       return user;
  //     })
  //   );
   
  logout() {

    localStorage.removeItem('currentUser');
    let user: User = {
      name: null,
      token: null,
    };
    this.userSubject.next(user);
  }
}


