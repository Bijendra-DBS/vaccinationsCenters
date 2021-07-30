import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dashboardService } from './dashboard.service';

@Component({
  selector: 'app-center-dashboard-page',
  templateUrl: './center-dashboard-page.component.html',
  styleUrls: ['./center-dashboard-page.component.scss']
})
export class CenterDashboardPageComponent implements OnInit {
  vaccineLoginData;


  constructor(private router: Router, private _dashboardService : dashboardService) { }

  ngOnInit(): void {
    this.vaccineLoginData = JSON.parse(sessionStorage.getItem('userData'))
  }

  newPatientsDetailPage(){
    this.router.navigate(['vaccine-user-listing']);
  }

  newPatientsVaccinated(){
    this.router.navigate(['vaccinated-user-listing']);
  }


}
