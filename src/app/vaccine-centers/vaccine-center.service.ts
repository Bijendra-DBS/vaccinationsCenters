import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '../shared/rest.service';
import { RestUrl } from '../shared/rest-url-constant';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class vaccineCenterService {

  constructor(private restService: RestService) {}

  getListOfCenters(): Observable<any> {
    return this.restService.get(RestUrl.listOfCenters)
  }


}
