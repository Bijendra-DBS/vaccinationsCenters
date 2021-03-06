import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubscriptionLike } from 'rxjs';
import { ObservableDataService } from '../observable/behaviourSubject.service';
import { vaccineDetailsService } from './vaccine-details.service';

@Component({
  selector: 'app-vaccine-centers-details',
  templateUrl: './vaccine-centers-details.component.html',
  styleUrls: ['./vaccine-centers-details.component.scss']
})
export class VaccineCentersDetailsComponent implements OnInit {

  observ: SubscriptionLike;
  responseData;

  constructor(private _router : Router, private vaccineDetailsService : vaccineDetailsService, private _observableDataService : ObservableDataService) { }

  ngOnInit(): void {
    this.observ = this._observableDataService.detailPageData.subscribe((requestParam)=>{
        console.log("requestParam",requestParam);
        this.responseData = requestParam;
    })
  }

  bookAppointment(data){
    let requestObj = {
      "param" : data
    }
    console.log("details page data ")
    this._observableDataService.passDetailData(requestObj);
    this._router.navigate(['booking']);
  }

  ngOnDestroy() {
    this.observ.unsubscribe()
  }
}
