import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private route: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let date = new Date();
    let userValue = JSON.parse(sessionStorage.getItem("userData"));
    console.log("Can Activate servcie  ++++++++++++++ ",userValue)
    // if(userValue == null) this.authService.logOut();

    let userFlag = this.authService.checkSession(userValue);
    console.log("flag",userFlag);
    if (userFlag) {
      // this.route.navigate(['dashboard']);
       return true;
    } else {
      //  this.route.navigate(['']);
      this.authService.logOut();
      // console.log("User Flag retrun ------> false");
       return false;
    }
  }
}
