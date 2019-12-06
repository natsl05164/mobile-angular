import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UNAUTHORIZED, BAD_REQUEST, FORBIDDEN, NOT_FOUND } from 'http-status-codes';

import { LoggerHelper } from '../helpers/logger.helper';
import { environment } from '../../../environments/environment';
import { AlertService } from '../../shared/components/alert/services/alert.service';
//import { ToasterService } from 'angular2-toaster';
//import { appToaster } from '../../configs/app-toaster.config';

/**
 * Adds a default error handler to all requests.
 */
@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(
    private logger: LoggerHelper,
    //private toasterService: ToasterService,
    private router: Router,
    private alertSvc: AlertService
  ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(error => this.errorHandler(error))); //  retry(1),
  }

  // Customize the default error handler here if needed
  private errorHandler(response: HttpEvent<any>): Observable<HttpEvent<any>> {
    if (!environment.production) {
      
      // Do something with the error
      this.logger.logError('Request error ' + JSON.stringify(response));
    }
    //if (response['error'] instanceof ErrorEvent) {
    //  // client-side error
    //  alert(`Error: ${response['message']}` );
    //}

    const httpErrorCode = response['status'];
    switch (httpErrorCode) {
      case UNAUTHORIZED:
        this.router.navigateByUrl('/auth/login');
        break;
      case FORBIDDEN:
        this.router.navigateByUrl('/auth/403');
        break;
      // case BAD_REQUEST:
      //    this.showError(error.message);
      //     break;
      case NOT_FOUND:
        this.alertSvc.create(
          "Not Found!", //title
          "danger", //type
          5000, // time,
          "Ops, something occurred. Please contact support if issue persists.",
          ""
        );
        break;
      default:
        //this.toasterService.pop('error', appToaster.errorHead, response['message']);  
        this.alertSvc.create(
          "Error!", //title
          "danger", //type
          5000, // time,
          "Ops, something occurred. Please contact support if issue persists.",
          response['message']
        );
    }
   
    throw response;
  }

}

