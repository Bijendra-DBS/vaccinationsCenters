import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'covidCenters';
  isVaccineCenterLoggedIn$;
  checkUser;
  isLoggedIn$;
  isUserLogin;

  constructor(private authService : AuthService, private _route : Router){

  }

  ngOnInit(): void {

    this.checkUser = JSON.parse(sessionStorage.getItem('userData'));
    this.isVaccineCenterLoggedIn$ = this.authService.isVaccineCenterLoggedIn;
    this.isLoggedIn$ = this.authService.isLoggedIn;

    console.log("checkUser ++",this.checkUser);
    console.log("isVaccineCenterLoggedIn ++",this.isVaccineCenterLoggedIn$);
    console.log("isLoggedIn ++",this.isLoggedIn$);

      if(this.checkUser != null && this.checkUser.userType == 1) {
        this.isUserLogin = true;
        this.home()
      } else if(this.checkUser != null && this.checkUser.userType == 2){
        this.isUserLogin = true;
        this.vaccineCenterHome()
      } else {
        this.isUserLogin = false;
        this.logout()
      }

      this.isVaccineCenterLoggedIn$.subscribe(res=>{
        console.log("Vaccine res ++",res)
        if(res) {
          this.isUserLogin = true;
        } else {
          this.isUserLogin = true;
        }
      });

  }

  vaccineCenterHome(){
    this._route.navigate(['center-dashboard']);
  }

  home(){
    console.log("this.checkUser ",this.checkUser);
    this.checkUser = JSON.parse(sessionStorage.getItem('userData'));

    if(this.checkUser.userType == 1 ){
      this._route.navigate(['listing']);
    } else if(this.checkUser.userType == 2) {
      this._route.navigate(['center-dashboard']);
    } else {
      this._route.navigate(['login']);
    }
  }

  logout(){
    sessionStorage.clear();
    this._route.navigate(['login']);
    // location.reload();
  }

}
