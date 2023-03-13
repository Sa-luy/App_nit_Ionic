import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class MyService {
  constructor(private http: HttpClient,) {}

  getBanner(id:any) {
    return this.http.get(environment.urlBanner+`?user_id=${id}`)
    .map((res: any) => res)
  }
  addBanner(data) {
    return this.http.post(environment.urlBanner,data)
    .map((res: any) => res)
  }
}
