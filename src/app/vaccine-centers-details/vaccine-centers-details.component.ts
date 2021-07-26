import { Component, OnInit } from '@angular/core';
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
  responseBody = [{
    img : "../assets/images/sligoVaccineCenter.jpg",
    name : "Sligo Institute of Technology",
    price : "Free Of Cost",
    address : "Knocknarea Arena, Sligo IT, Ash Lane Ballinode Sligo",
    timings : "9am to 9pm",
    Parking : "Free on site parking. 20 spaces IT Sligo",
    Facilities : "Toilet / wheelchair accessible toilet facilities.",
  }]

  constructor(private vaccineDetailsService : vaccineDetailsService, private _observableDataService : ObservableDataService) { }

  ngOnInit(): void {

    this.observ = this._observableDataService.detailPageData.subscribe((requestParam)=>{
        console.log("requestParam");
    })
  }

  ngOnDestroy() {
    this.observ.unsubscribe()
  }

  bookAppointment(){
    alert("book appointment clicked")
  }

}
