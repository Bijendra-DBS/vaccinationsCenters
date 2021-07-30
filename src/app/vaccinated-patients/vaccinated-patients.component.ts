import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObservableDataService } from '../observable/behaviourSubject.service';
import { CommonService } from '../shared/commonService/common.service';
import { vaccinatedUserService } from './vaccinated-user.service';

@Component({
  selector: 'app-vaccinated-patients',
  templateUrl: './vaccinated-patients.component.html',
  styleUrls: ['./vaccinated-patients.component.scss']
})
export class VaccinatedPatientsComponent implements OnInit {

  // responseBody = [
  //   {name:"Bijendra Gaur", address: "Dublin 1, Dublin", price: "Free", status: "Vaccination Done", VDate: "10/07/2021", VTime:"3pm" },
  //   {name:"Sharvari", address: "Dublin 2, Dublin", price: "Free", status: "Vaccination Done", VDate: "15/07/2021", VTime:"4pm"},
  //   {name:"Tushar Kotian", address: "Dublin 3, Dublin", price: "Free", status: "Vaccination Done", VDate: "1/07/2021", VTime:"5pm"},
  //   {name:"Shrivardhan", address: "Dublin 4, Dublin", price: "Free", status: "Vaccination Done", VDate: "16/07/2021", VTime:"2pm"}
  // ]
  vaccineCenterData
  responseData
  constructor(private _observableDataService : ObservableDataService,
    private _vaccinatedUserService: vaccinatedUserService, private _commonService: CommonService) { }

  ngOnInit(): void {
    this.vaccineCenterData = JSON.parse(sessionStorage.getItem('userData'));
    this.fetchUserByVaccinedCenterID()
  }

  fetchUserByVaccinedCenterID(){
    this._vaccinatedUserService.getVaccinatedUser({id: this.vaccineCenterData.id.toString()}).subscribe((responseBody)=>{
      console.log("response data ",responseBody);
      let responseObject = responseBody;

      if(responseObject.status == 200){
        this.responseData = responseObject.body
      } else {
         this._commonService.tostMessage(this.responseData.responseMessage);
      }
    },err => {
       this._commonService.tostMessage(err.error.responseMessage);
    })
  }



}
