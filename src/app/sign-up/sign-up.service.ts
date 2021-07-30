import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '../shared/rest.service';
import { RestUrl } from '../shared/rest-url-constant';


@Injectable({
  providedIn: 'root'
})

export class signUpService {

  constructor(private restService: RestService) {}

  signUp(data): Observable<any> {
    console.log("data in sign up", data)
    return this.restService.create(RestUrl.signUp, data)
  }

  sendOTP(data): Observable<any> {
    console.log("data in sign up", data)
    return this.restService.create(RestUrl.sendOTP, data)
  }


}
