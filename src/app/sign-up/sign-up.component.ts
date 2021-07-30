import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RegexConstant } from '../shared/regex-constant'
import { signUpService } from './sign-up.service'
import {CommonService} from '../shared/commonService/common.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpValidateForm: FormGroup;
  otpForm: FormGroup;
  isVisible:boolean = false;
  loginResponseData;
  message;

  constructor(private _formBuilder: FormBuilder, private _signUpService : signUpService,
     private _commonService : CommonService, private router: Router) { }

  ngOnInit(): void {
    this.signUpValidateForm = this._formBuilder.group({
      name           : ['', [Validators.required]],
      email          : ['', [Validators.required, Validators.email]],
      // countryCode    : ['', [Validators.required]],
      contactNo      : ['', [Validators.required, this.mobileNumber]],
      password       : ['', [Validators.required, this.passwordPattern]],
      // userType          : ['', [Validators.required]]
    });

    this.otpForm = this._formBuilder.group({
      otp : ['',[Validators.required]]
    });

  }

  submitForm(value: any){
    for (const key in this.signUpValidateForm.controls) {
        this.signUpValidateForm.controls[key].markAsDirty();
        this.signUpValidateForm.controls[key].updateValueAndValidity();
      }
      console.log("submit Form ",value);
      if(value != null){
        let obj = {
          username : value.name,
          email : value.email,
          password : value.password,
          contact : value.contactNo,
          userType : '1'
        }

        this._signUpService.signUp(obj).subscribe((responseBody)=>{
          let responseData = responseBody
          console.log(responseData);
          if(responseData.status == 200){
            this.isVisible = !this.isVisible;
          }
      })
      }
    }

    resetLogin() {
      this.signUpValidateForm.reset()
     }

    otpSubmitForm(value: any) {
      console.log("submit Form ",value);

      if(value != null){
        let obj = {
          otp_code : value.otp
        }

        this._signUpService.sendOTP(obj).subscribe((responseBody)=>{
          let responseData = responseBody
          console.log(responseData);
          if(responseData.status == 200){
            this.isVisible = !this.isVisible;
            this.message = "OTP is confirmed and email address is verifyed, Please Login!"
            this.signUpValidateForm.reset()
            this.router.navigate(['/'])
          }
      })
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

    mobileNumber = (control: FormControl): {[s: string]: boolean} => {

      console.log("control.value ----->",control.value)


      if(!control.value) {
        return { required: true };
      } else if (control.value.match(RegexConstant.ONLY_NUMBER)){
        return {};
      } else {

        return { mobileErr: true, error: true };
      }
    }

}
