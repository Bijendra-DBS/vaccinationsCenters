import {
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpEvent,
    HttpErrorResponse
  } from "@angular/common/http";
  import { Injectable } from "@angular/core";
  import { tap, retry, catchError } from 'rxjs/operators';
  import { Observable, throwError } from 'rxjs';


  @Injectable({
    providedIn: "root"
  })
  export class HttpIntercepterBasicAuthService implements HttpInterceptor {

    constructor() {

    }

    intercept(request: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>>  {

        request = request.clone({
          setHeaders: {
            'Content-Type': 'application/json'
          }
        });

      return next.handle(request).pipe(
        tap(
          error => this.handleError(request, error)
        )
      );
    }

    handleError(req: HttpRequest<any>, error) {
      let errorMessage = '';

      if (error.error instanceof ErrorEvent) {
        // client-side error
        errorMessage = `Error: ${error.error.message}`;
      } else {
        // server-side error
        errorMessage = `Error Message: ${error.error}`;
      }
      return throwError(errorMessage);
    }
  }
