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
  loginOption = [
    {value: '1', viewValue: 'User'},
    {value: '2', viewValue: 'Vaccine Center'},
  ];
  constructor(private router: Router, private _commonService: CommonService,
    private _formBuilder: FormBuilder, private _loginService : loginService) { }

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
      if(value.userType == 1){
        let obj={
          email : value.email,
          password : value.password
        }
        this._loginService.login(obj).subscribe((responseBody)=>{
          let responseData = responseBody
          if(responseData.status == 200){
            responseData.body[0].userType = "1"
            sessionStorage.setItem("userData",JSON.stringify(responseData.body[0]));
            this.router.navigate(['listing']);
          }
        },err => {
          this._commonService.tostMessage(err.error.responseMessage);
       })
      } else if(value.userType == 2){
        let obj={
          email : value.email,
          password : value.password
        }
        this._loginService.vaccinCenterlogin(obj).subscribe((responseBody)=>{
          let responseData = responseBody
          console.log("responseData Login",responseData.body);
          if(responseData.status == 200){
            responseData.body[0].userType = "2"
            sessionStorage.setItem("userData",JSON.stringify(responseData.body[0]));
            this.router.navigate(['center-dashboard']);
          }
        },err => {
          this._commonService.tostMessage(err.error.responseMessage);
       })
      } else {
        alert("something went wrong!")
      }
  }

  loginType(event){
    console.log("selectedType",event);

    let selectedType = event;
    console.log("selectedType",selectedType);
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
