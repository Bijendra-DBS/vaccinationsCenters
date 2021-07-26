import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '../shared/rest.service';
import { RestUrl } from '../shared/rest-url-constant';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class vaccineDetailsService {

  constructor(private restService: RestService) {}

  getListOfCenters(data): Observable<any> {
    return this.restService.create(RestUrl.detailsOfCenters, data)
  }

}
