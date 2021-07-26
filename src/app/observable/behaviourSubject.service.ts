import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ObservableDataService {

  private messageSource = new BehaviorSubject<any>(null);

  detailPageData = this.messageSource.asObservable();

  constructor() { }

  passDetailData(message: any) {
    this.messageSource.next(message);
  }

  // checkUserOperation(message: any) {
  //   this.checkOperationSource.next(message)
  // }

  // passAstroDetails(message: any) {
  //   this.astroDetail.next(message)
  // }

  // messageData(message : any){
  //   this.getMessage.next(message);
  // }

}
