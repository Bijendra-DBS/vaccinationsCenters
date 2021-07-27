import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CommonService } from '../shared/commonService/common.service';


@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private VaccineCenterLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return  this.loggedIn.asObservable();
  }
  get isVaccineCenterLoggedIn() {
    return  this.VaccineCenterLoggedIn.asObservable();
  }

  constructor(
    private _route: Router,
    private _commonService: CommonService
  ) {

  }

  checkSession(userData) {
    if( userData != null && userData.userType == 2) { // this condition is checking whether it's admin or normal user
    this.VaccineCenterLoggedIn.next(true);
    this.loggedIn.next(false)
    return true;
    } else if(userData != null && userData.userType == 1) {
    this.VaccineCenterLoggedIn.next(false);
    this.loggedIn.next(true);
      return true;
    } else {
      return true;
    }
  }

  checkAccess(userData) {
    if( userData != null && userData.userType == 2 ) { // this condition is checking whether it's admin or normal user
      this.VaccineCenterLoggedIn.next(false);
      this.loggedIn.next(true);
      return false;
    } else {
      this.VaccineCenterLoggedIn.next(true);
      this.loggedIn.next(true);
      return true;
    }
  }

  logOut(){
    location.reload();
    sessionStorage.clear();
    this._route.navigate(['']);
    this._commonService.tostMessage("Log Out Successfully!");
  }


}
