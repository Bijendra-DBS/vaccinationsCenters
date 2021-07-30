import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '../shared/rest.service';
import { RestUrl } from '../shared/rest-url-constant';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class loginService {

  constructor(private restService: RestService) {}

  login(data): Observable<any> {
    return this.restService.create(RestUrl.login, data)
  }

  vaccinCenterlogin(data): Observable<any> {
    return this.restService.create(RestUrl.vaccinCenterlogin, data)
  }

}
