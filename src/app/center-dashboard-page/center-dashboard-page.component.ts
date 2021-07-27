import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-center-dashboard-page',
  templateUrl: './center-dashboard-page.component.html',
  styleUrls: ['./center-dashboard-page.component.scss']
})
export class CenterDashboardPageComponent implements OnInit {

  responseBody = [{

  }]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  newPatientsDetailPage(){
    this.router.navigate(['vaccine-user-listing']);
  }

  newPatientsVaccinated(){
    this.router.navigate(['vaccinated-user-listing']);
  }


}
