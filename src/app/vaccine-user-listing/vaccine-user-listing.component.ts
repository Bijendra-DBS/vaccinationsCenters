import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ObservableDataService } from '../observable/behaviourSubject.service';
import { CommonService } from '../shared/commonService/common.service';
import { vaccineUserListingService } from './vaccine-user.service';

@Component({
  selector: 'app-vaccine-user-listing',
  templateUrl: './vaccine-user-listing.component.html',
  styleUrls: ['./vaccine-user-listing.component.scss']
})
export class VaccineUserListingComponent implements OnInit {

  responseData;
  constructor( private _vaccineUserService: vaccineUserListingService, private _commonService: CommonService, private _formBuilder: FormBuilder,private _observableDataService : ObservableDataService, private _router : Router) { }

  doVaccinationValidateForm: FormGroup;
  vaccineCenterData;
  ngOnInit(): void {
    this.doVaccinationValidateForm = this._formBuilder.group({
      tokenNumber  : ['', [Validators.required]]
    })
    this.vaccineCenterData = JSON.parse(sessionStorage.getItem('userData'));
    this.fetchUserByVaccineCenterID()


  }

  fetchUserByVaccineCenterID(){
    this._vaccineUserService.getAppointmentUser({id: this.vaccineCenterData.id.toString()}).subscribe((responseBody)=>{
      console.log("responseBody appointment ",responseBody);
      let responseObject = responseBody;

      if(responseObject.status == 200){
        this.responseData = responseObject.body
      } else {
         this._commonService.tostMessage(this.responseData.responseMessage);
      }
    },err => {
      console.log("err", err)
      this._commonService.tostMessage(err.error.responseMessage);
    })
  }



  submitForm(index,value){
    let obj = {
      id : value.id,
      user_token_number :  this.doVaccinationValidateForm.value.tokenNumber
    }
    console.log("Obj ", obj);
    this._vaccineUserService.checkUserVaccineToken(obj).subscribe((responseBody)=>{
        console.log("responseBody ", responseBody);
        if(responseBody.status == 200){
          this._commonService.tostMessage("Token is Verified, ready for vaccination!");
          location.reload();
      }
    })


  }
}
