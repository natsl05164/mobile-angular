import { Injectable } from '@angular/core';

import { Observable, timer ,of   } from 'rxjs';
import { map, switchMap,tap, finalize, catchError  } from 'rxjs/operators';

import { UserEndpoint } from '../../../core/user/services/user.endpoint';
 
 
//import { Login } from '../types/login';
//import { StoreRequestStateUpdater } from '../../shared/types/store-request-state-updater'; 
//import * as endpointHelpers from '../../shared/helpers/endpoint.helpers';



@Injectable()
export class RegisterHttpValidators {
  
    
    constructor(private endpoint: UserEndpoint) {

    }

  

    validateEmailIsNew(email: string): Observable<{ [key: string]: any } | null > {
        let isEmailNew: boolean;
        return timer(500).pipe( 
            switchMap(() => this.endpoint.validateEmailIsNew(email)),
            tap(r => {

                isEmailNew = r;
                
            }),
            map( (r :boolean) => {
                 
                if (r===false) {

                    return { emailExists: true };
                }

                return null;
            }),
            catchError(err => of({ emailExists: true })),
            finalize(() => {
                if (isEmailNew !== true) {

                    return { emailExists: true };
                }

                return null;
            })
        );
          //this.endpoint.validateEmailIsNew(email).pipe(
        //    map((d: boolean) => { 
        //        return d as boolean;
        //    }), catchError((error: any) => {

        //        return throwError(error);
        //    })
        //);
      
    }

    validateUserNameIsNew(userName: string): Observable<{ [key: string]: any } | null> {
        let isUserNew: boolean;
        return timer(500).pipe(
            switchMap(() => this.endpoint.validateUserNameIsNew(userName)),
            tap(r => { //success only go here

                isUserNew = r;

            }),
            map(r => {
                if (!r) {

                    return { userExists: true };
                }

                return null;
            }),
            catchError(err => of({ userExists: true })),
            finalize(() => {
                if (isUserNew !== true ) {

                    return { userExists: true };
                }

                return null;
            })
        );

    }


    validateCaptcha(captchaInput: string): Observable<{ [key: string]: any } | null> {
        let isValid: boolean;
        return timer(500).pipe(
            switchMap(() => this.endpoint.validateCaptcha(captchaInput)),
            tap(r => { //success only go here

                isValid = r;

            }),
            map(r => {
                if (!r) {

                    return { isCaptchaValid: false };
                }

                return null;
            }),
            catchError(err => of({ isCaptchaValid: false })),
            finalize(() => {
                if (isValid !== true) {

                    return { isCaptchaValid: false };
                }

                return null;
            })
        );

    }
}

