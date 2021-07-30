import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '../shared/rest.service';
import { RestUrl } from '../shared/rest-url-constant';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class vaccinatedUserService {

  constructor(private restService: RestService) {}

  getVaccinatedUser(data): Observable<any> {
    return this.restService.create(RestUrl.getVaccinatedUser, data)
  }

}
