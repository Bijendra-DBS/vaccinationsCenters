import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ObservableDataService } from '../observable/behaviourSubject.service';
import { CommonService } from '../shared/commonService/common.service';

@Component({
  selector: 'app-vaccine-user-listing',
  templateUrl: './vaccine-user-listing.component.html',
  styleUrls: ['./vaccine-user-listing.component.scss']
})
export class VaccineUserListingComponent implements OnInit {
  responseBody = [
    {name:"Bijendra Gaur", address: "Dublin 1, Dublin", timing : "3pm", price: "Free"},
    {name:"Sharvari", address: "Dublin 2, Dublin", timing : "2pm", price: "Free"},
    {name:"Tushar Kotian", address: "Dublin 3, Dublin", timing : "1pm", price: "Free"},
    {name:"Shrivardhan", address: "Dublin 4, Dublin", timing : "10am", price: "Free"}
  ]

  constructor(  private _commonService: CommonService, private _formBuilder: FormBuilder,private _observableDataService : ObservableDataService, private _router : Router) { }

  doVaccinationValidateForm: FormGroup;

  ngOnInit(): void {
    this.doVaccinationValidateForm = this._formBuilder.group({
      tokenNumber  : ['', [Validators.required]]
    })
  }

  detailPage(id, data){
    let requestObj = {
      "id" : id,
      "param" : data
    }
    console.log("details page data ")
    this._observableDataService.passDetailData(requestObj);
    this._router.navigate(['detail']);
  }

  submitForm(index,value){
    console.log("Value ", index,"&",value);
    this._commonService.tostMessage("Vaccinated Successfully!");
  }
}
