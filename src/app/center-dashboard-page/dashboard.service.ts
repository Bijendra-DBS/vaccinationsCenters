import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '../shared/rest.service';
import { RestUrl } from '../shared/rest-url-constant';


@Injectable({
  providedIn: 'root'
})

export class dashboardService {

  constructor(private restService: RestService) {}

}
