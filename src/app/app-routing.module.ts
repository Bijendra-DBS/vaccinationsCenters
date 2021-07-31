import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/canActivateAuth.gaurd';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { CenterDashboardPageComponent } from './center-dashboard-page/center-dashboard-page.component';
import { LoginComponent } from './login/login.component';
import { VaccinatedPatientsComponent } from './vaccinated-patients/vaccinated-patients.component';
import { VaccineCentersDetailsComponent } from './vaccine-centers-details/vaccine-centers-details.component';
import { VaccineCentersComponent } from './vaccine-centers/vaccine-centers.component';
import { VaccineUserListingComponent } from './vaccine-user-listing/vaccine-user-listing.component';


const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login' , component: LoginComponent, canActivate: [AuthGuard]},
  { path: 'listing' , component: VaccineCentersComponent, canActivate: [AuthGuard]},
  { path: 'detail' , component: VaccineCentersDetailsComponent, canActivate: [AuthGuard]},
  { path: 'vaccine-user-listing' , component: VaccineUserListingComponent, canActivate: [AuthGuard]},
  { path: 'center-dashboard' , component: CenterDashboardPageComponent, canActivate: [AuthGuard]},
  { path: 'vaccinated-user-listing' , component: VaccinatedPatientsComponent, canActivate: [AuthGuard]},
  { path: 'booking' , component: BookingPageComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
