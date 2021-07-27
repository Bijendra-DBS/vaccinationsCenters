import { Component, OnInit } from '@angular/core';
import { ObservableDataService } from '../observable/behaviourSubject.service';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss']
})
export class BookingPageComponent implements OnInit {
  observ;

  constructor( private _observableDataService : ObservableDataService) { }

  ngOnInit(): void {
    this.observ = this._observableDataService.detailPageData.subscribe((requestParam)=>{
      console.log("requestParam");
  })
  }

}
