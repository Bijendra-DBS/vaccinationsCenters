import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObservableDataService } from '../observable/behaviourSubject.service';
import { vaccineCenterService } from './vaccine-center.service'

@Component({
  selector: 'app-vaccine-centers',
  templateUrl: './vaccine-centers.component.html',
  styleUrls: ['./vaccine-centers.component.scss']
})
export class VaccineCentersComponent implements OnInit {

  centersListing;
  responseBody = [
    {img: "../assets/images/sligoVaccineCenter.jpg", name:"Sligo Institute of Technology", address: "Knocknarea Arena, Sligo IT, Ash Lane Ballinode Sligo", timings : "9am to 8pm", price: "Free"},
    {img: "../assets/images/kilanerinCommunityCentre.jpg", name:"Kilanerin Community Centre", address: "Gorey, Wexford", timings : "9am to 8pm", price: "Free"},
    {img: "../assets/images/páircUíChaoimh.jpg", name:"Páirc Uí Chaoimh", address: "The Marina, Cork City, Cork", timings : "9am to 8pm", price: "Free"},
    {img: "../assets/images/cityHallCork.jpg", name:"City Hall Cork", address: "City Hall, Anglesea Street, Cork City, Cork", timings : "9am to 8pm", price: "Free"},
    {img: "../assets/images/avivaVaccineCenter.jpg", name:"Aviva Stadium", address: "Landsdowne Road, Ballsbridge, Dublin 4, Dublin", timings : "9am to 8pm", price: "Free"}
  ];
  constructor(private _router : Router, private _vaccineCenterService : vaccineCenterService, private _observableDataService : ObservableDataService) { }

  ngOnInit(): void {
    this._vaccineCenterService.getListOfCenters().subscribe((responseData)=>{
      this.responseBody = responseData
    })

  }

  detailPage(id,data){
    let requestObj = {
      "id" : id,
      "param" : data
    }
    console.log("details page data ")
    this._observableDataService.passDetailData(requestObj);
    this._router.navigate(['detail']);
  }

}
