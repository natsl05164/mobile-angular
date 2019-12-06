import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ApiResponse } from '../../../shared/types/api-response';
import { USER_CONFIG } from '../user.config';
import { User } from '../types/user';
import { Login } from '../types/login';
import { Register } from '../types/register';
import { ForgotPassword } from '../types/forgot-password';
import { ResetPassword } from '../types/reset-password.model';
import { ChangePassword } from '../types/change-password';
import { StoreRequestStateUpdater } from '../../../shared/types/store-request-state-updater';
 

const userInfoKey = 'currentUser';
import { PlatformService } from '@trilon/ng-universal';

@Injectable()
export class UserEndpoint {
  constructor(private http: HttpClient, private platformSvc: PlatformService) { }


  getLocalUserInfo() : User{
  
    if (this.platformSvc.isBrowser) {
      const savedUserInfo = sessionStorage.getItem(userInfoKey) || localStorage.getItem(userInfoKey);
      return <User>JSON.parse(savedUserInfo);
    } 
    return null;
  }

  clearLocalUserInfo() {
    if (this.platformSvc.isBrowser) {
      sessionStorage.removeItem(userInfoKey);
      localStorage.removeItem(userInfoKey);
    }
  }

  setLocalUserInfo(isRemember: boolean, data: User) {
    if (this.platformSvc.isBrowser) { 
     
        const storage = isRemember ? localStorage : sessionStorage;
        storage.setItem(userInfoKey, JSON.stringify(data));
  
    }
  }

  

  login(d:Login, requestStateUpdater: StoreRequestStateUpdater): Observable<User> {
    const request = USER_CONFIG.requests.login;
    requestStateUpdater(request.name, {
      inProgress: true,
    });
      return this.http.post<ApiResponse<User>>(request.url, d, { withCredentials: true }).pipe(
      map(response => {
        requestStateUpdater(request.name, {
          inProgress: false,
        });
        return response.data as User;
      }),
      catchError((error: HttpErrorResponse) => {
        requestStateUpdater(request.name, {
          inProgress: false,
          error: true,
          errorMessage: error.message
        });
        
        return throwError(error);
      })
    );
  }




  forgotPassword(d: ForgotPassword, requestStateUpdater: StoreRequestStateUpdater): Observable<null> {
    const request = USER_CONFIG.requests.forgotPassword;
    //const href = '\forgot-password';
    requestStateUpdater(request.name, {
      inProgress: true,
    });
    //return this.http.post<any>(href, d);

      return this.http.post<ApiResponse<void>>(request.url, d, { withCredentials: true }).pipe(
      map(response => {
        requestStateUpdater(request.name, {
          inProgress: false,
        });
        return null;
      }),
      catchError((error: HttpErrorResponse) => {
        requestStateUpdater(request.name, {
          inProgress: false,
          error: true,
        });
        return throwError(error);
      })
    );
  }


  logout( requestStateUpdater: StoreRequestStateUpdater): Observable<null> {
    const request = USER_CONFIG.requests.logout;
    //const href = '\forgot-password';
    requestStateUpdater(request.name, {
      inProgress: true,
    });
    //return this.http.post<any>(href, d);

      return this.http.post<ApiResponse<void>>(request.url, "", { withCredentials: true } ).pipe(
      map(response => {
        requestStateUpdater(request.name, {
          inProgress: false,
        });
        return null;
      }),
      catchError((error: HttpErrorResponse) => {
        requestStateUpdater(request.name, {
          inProgress: false,
          error: true,

        });
        return throwError(error);
      })
    );
  }


  register(d: Register, requestStateUpdater: StoreRequestStateUpdater): Observable<User> {
    const request = USER_CONFIG.requests.register;
    requestStateUpdater(request.name, {
      inProgress: true,
    });
      return this.http.post<ApiResponse<User>>(request.url, d, { withCredentials: true }).pipe(
      map(response => {
        requestStateUpdater(request.name, {
          inProgress: false,
          success:true
        });
        return response.data as User;
      }),
      catchError((error: HttpErrorResponse) => {
        requestStateUpdater(request.name, {
          inProgress: false,
          error: true,
        });
       
        return throwError(error);
      })
    );
  }

  validateResetPwdToken(d: string, requestStateUpdater: StoreRequestStateUpdater): Observable<void> {
    const request = USER_CONFIG.requests.validateResetPwdToken;
    requestStateUpdater(request.name, {
      inProgress: true,
    });
      return this.http.post<ApiResponse<User>>(request.url, d, { withCredentials: true }).pipe(
      map(response => {
        requestStateUpdater(request.name, {
          inProgress: false,
        });
        //return response.data as User;
      }),
      catchError((error: HttpErrorResponse) => {
        requestStateUpdater(request.name, {
          inProgress: false,
          error: true,
        });
           
          throwError(error);
          throw new Error(error.message);
          
      })
    );
    }

    validateEmailIsNew(d: string ): Observable<boolean> {
        const request = USER_CONFIG.requests.validateEmailIsNew;
     
        return this.http.post<ApiResponse<boolean>>(request.url, d, { withCredentials: true }).pipe(
            map(response => { 
                return response.data as boolean;
            }),
            catchError((error: HttpErrorResponse) => {
              
                throwError(error);
                throw error;
            })
        );
    }

    validateUserNameIsNew(d: string): Observable<boolean> {
        const request = USER_CONFIG.requests.validateUserNameIsNew;

        return this.http.post<ApiResponse<boolean>>(request.url, d, { withCredentials: true }).pipe(
            map(response => {
                return response.data as boolean;
            }),
            catchError((error: HttpErrorResponse) => {

                throwError(error);
                throw error;
            })
        );
    }
   
  changePassword(d: ChangePassword, requestStateUpdater: StoreRequestStateUpdater): Observable<null> {
    const request = USER_CONFIG.requests.changePassword;
    //const href = '\forgot-password';
    requestStateUpdater(request.name, {
      inProgress: true,
    });
    //return this.http.post<any>(href, d);

      return this.http.post<ApiResponse<void>>(request.url, d, { withCredentials: true }).pipe(
      map(response => {
        requestStateUpdater(request.name, {
          inProgress: false,
        });
        return null;
      }),
      catchError((error: HttpErrorResponse) => {
        requestStateUpdater(request.name, {
          inProgress: false,
          error: true,
        });
        return throwError(error);
      })
    );
    }

    validateCaptcha(d: string): Observable<boolean> {
        const request = USER_CONFIG.requests.validateCaptcha;

        return this.http.post<ApiResponse<boolean>>(request.url, d, { withCredentials: true }).pipe(
            map(response => {
                return response.data as boolean;
            }),
            catchError((error: HttpErrorResponse) => {

                return throwError(error);
               
            })
        );
    }

  resetPassword(d: ResetPassword, requestStateUpdater: StoreRequestStateUpdater): Observable<null> {
    const request = USER_CONFIG.requests.resetPassword;
    //const href = '\forgot-password';
    requestStateUpdater(request.name, {
      inProgress: true,
    });
    //return this.http.post<any>(href, d);

      return this.http.post<ApiResponse<void>>(request.url, d, { withCredentials: true }).pipe(
      map(response => {
        requestStateUpdater(request.name, {
          inProgress: false,
        });
        return null;
      }),
      catchError((error: HttpErrorResponse) => {
        requestStateUpdater(request.name, {
          inProgress: false,
          error: true,
        });
        return throwError(error);
      })
    );
    }



    registerGames(requestStateUpdater: StoreRequestStateUpdater): Observable<string> {
        const request = USER_CONFIG.requests.registerGames;
        //const href = '\forgot-password';
        requestStateUpdater(request.name, {
            inProgress: true,
        });
        //return this.http.post<any>(href, d);

        return this.http.post<ApiResponse<string>>(request.url, null, { withCredentials: true }).pipe(
            map(response => {
                requestStateUpdater(request.name, {
                    inProgress: false,
                });
                return response.data as string;
            }),
            catchError((error: HttpErrorResponse) => {
                requestStateUpdater(request.name, {
                    inProgress: false,
                    error: true,
                });
                return throwError(error);
            })
        );
    }
}
