import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
// import { callBackendApi } from '../../constant/rest-url.constants';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private messageSource = new BehaviorSubject(null);
  checkUserData = this.messageSource.asObservable();

  constructor(private http: HttpClient ) { }

  checkUser(message: string) {
    this.messageSource.next(message)
  }

  public create = (route: string, body) => {
    return this.http.post(environment.urlAddress + route, body);
  };

  public get = (route: string) => {
    return this.http.get(environment.urlAddress + route);
  };


}
