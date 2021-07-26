import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RegexConstant } from '../shared/regex-constant'
import { loginService } from './login.service'
import {CommonService} from '../shared/commonService/common.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  otpForm: FormGroup;
  isVisible:boolean = false;
  isForgotPassVisible: boolean = false;

  constructor(private router: Router, private _commonService: CommonService, private _formBuilder: FormBuilder, private _loginService : loginService) { }

  ngOnInit(): void {
    this.validateForm = this._formBuilder.group({
      email   : ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordPattern]],
      userType: [null, Validators.required]
    });


    this.otpForm = this._formBuilder.group({
      otp : ['', Validators.required]
     });
  }

  submitForm(value: any) {
    for (const key in this.validateForm.controls) {
        this.validateForm.controls[key].markAsDirty();
        this.validateForm.controls[key].updateValueAndValidity();
      }

      console.log("submit Form ",value);
      if(value){
        this.router.navigate(['listing'])
        alert("something works !")

      } else {
        alert("something went wrong!")
      }
  }

  otpSubmitForm(value: any) {
    console.log("otp console",value);

  }


  resetLogin() {
   this.validateForm.reset()
  }

  mobileNumber= (control: FormControl): {[s: string]: boolean} => {

    console.log("control.value ----->",control.value)


    if(!control.value) {
      return { required: true };
    } else if (control.value.match(RegexConstant.ONLY_NUMBER)){
      return {};
    } else {

      return { mobileErr: true, error: true };
    }
  }

  passwordPattern = (control: FormControl): {[s: string]: boolean} => {
    console.log("passwordPattern ----->",control.value)

    if(!control.value) {
      return { required: true };
    }else if (control.value.match(RegexConstant.PASSWORD_REGEX)){
      return {};
    }else{
      return { passErr: true, error: true };
    }
  }

}
