import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { RestService } from '../rest.service';
import { RestUrl } from '../rest-url-constant';


@Injectable({
  providedIn: 'root'
})

export class CommonService {

  horizontalPosition: MatSnackBarHorizontalPosition;
  verticalPosition: MatSnackBarVerticalPosition;

  constructor(private _snackBar: MatSnackBar,private restService: RestService) {}

  tostMessage(message) {
    this._snackBar.open(message,'close', {
      duration: 10 * 1000,
      horizontalPosition : "center",
      verticalPosition : "top"
  })
  }


}
