import { Component, OnInit } from '@angular/core';
import { ObservableDataService } from '../observable/behaviourSubject.service';
import { bookingService } from './booking.service';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss']
})
export class BookingPageComponent implements OnInit {
  observ;
  responseBody;
  userData
  constructor( private _observableDataService : ObservableDataService, private _bookingService : bookingService) { }

  ngOnInit(): void {
    this.userData = JSON.parse(sessionStorage.getItem('userData'))
    console.log("this.userData",this.userData);

    this.observ = this._observableDataService.detailPageData.subscribe((requestParam)=>{
      console.log("requestParam",requestParam);
      this.responseBody = requestParam.param;
      this.bookAppointment(this.responseBody)
  })
  }

  bookAppointment(bookingData){
    let obj = {
      user_name : this.userData.user_name,
      user_email_id : this.userData.user_email_id,
      vaccine_center_id : bookingData.id
    }
    this._bookingService.bookSlot(obj).subscribe((responseBody)=>{
      console.log("responseBody -->",responseBody);

    })
  }

}
