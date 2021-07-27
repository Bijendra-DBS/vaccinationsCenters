import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObservableDataService } from '../observable/behaviourSubject.service';

@Component({
  selector: 'app-vaccinated-patients',
  templateUrl: './vaccinated-patients.component.html',
  styleUrls: ['./vaccinated-patients.component.scss']
})
export class VaccinatedPatientsComponent implements OnInit {

  responseBody = [
    {name:"Bijendra Gaur", address: "Dublin 1, Dublin", price: "Free", status: "Vaccination Done", VDate: "10/07/2021", VTime:"3pm" },
    {name:"Sharvari", address: "Dublin 2, Dublin", price: "Free", status: "Vaccination Done", VDate: "15/07/2021", VTime:"4pm"},
    {name:"Tushar Kotian", address: "Dublin 3, Dublin", price: "Free", status: "Vaccination Done", VDate: "1/07/2021", VTime:"5pm"},
    {name:"Shrivardhan", address: "Dublin 4, Dublin", price: "Free", status: "Vaccination Done", VDate: "16/07/2021", VTime:"2pm"}
  ]

  constructor(private _observableDataService : ObservableDataService) { }

  ngOnInit(): void {
  }



}
