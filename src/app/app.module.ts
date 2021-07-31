import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerComponent } from './spinner/spinner.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpIntercepterBasicAuthService } from './shared/http-intercepter-basic-auth.service';
import { LoaderInterceptorService } from './shared/loader-interceptor.service';
import  { MaterialModule } from './material.module'
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/canActivateAuth.gaurd';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VaccineCentersComponent } from './vaccine-centers/vaccine-centers.component';
import { VaccineCentersDetailsComponent } from './vaccine-centers-details/vaccine-centers-details.component';
import { VaccineUserListingComponent } from './vaccine-user-listing/vaccine-user-listing.component';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { CenterDashboardPageComponent } from './center-dashboard-page/center-dashboard-page.component';
import { VaccinatedPatientsComponent } from './vaccinated-patients/vaccinated-patients.component';
import { VaccinationFormComponent } from './vaccination-form/vaccination-form.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    LoginComponent,
    SignUpComponent,
    VaccineCentersComponent,
    VaccineCentersDetailsComponent,
    VaccineUserListingComponent,
    BookingPageComponent,
    CenterDashboardPageComponent,
    VaccinatedPatientsComponent,
    VaccinationFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    AuthService,
    AuthGuard,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpIntercepterBasicAuthService,
    multi: true
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
