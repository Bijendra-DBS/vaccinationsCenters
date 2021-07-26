import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { Observable } from 'rxjs';
import { LoaderService } from '../shared/loader/loader.service';



@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  isSpinning$: Observable<boolean>;
  show : boolean;
  constructor(private spinner: NgxSpinnerService,   private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.isSpinning$ = this.loaderService.loaderState;
    this.isSpinning$.subscribe(res=> {
      if(res){
        this.show = true;
        this.spinner.show();
      } else {
        this.show = false;
        this.spinner.hide();
      }
    });

  }

}
