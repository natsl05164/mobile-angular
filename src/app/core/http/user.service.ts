import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap, debounce } from 'rxjs/operators';
import { of as observableOf } from 'rxjs';
//import { ForgotPassword } from '../../shared/models/forgot-password.model';
//import { ResetPassword } from '../../shared/models/reset-password.model'; 
//import { UserInfo } from '../../shared/models/userinfo.model';
//import { Login } from '../../shared/models/login.model';

//import { AuthUser } from '../../shared/models/auth-user.interface';
//import { ApiResponse } from '../../shared/models/api-response.interface';
//import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  //forgotPassword(d: ForgotPassword): Observable<any> {
  //  const href = '\forgot-password';
  //  return this.http.post<any>(href, d);
  //}
   
  //resetPassword(d: ResetPassword): Observable<any> {
  //  const href =  '\reset-password';
  //  return this.http.post<any>(href, d);
  //}

  validateResetPwdToken(d: string): Observable<any> {
    const href = '/api/validateResetPwdToken';
    return this.http.post<any>(href, d);
  }
   

  //register(d: UserInfo): Observable<any> {
  //  const href =  '\register';
  //  return this.http.post<any>(href, d);
  //}


  //login(d: Login): Observable<ApiResponse<AuthUser>> {
  //  const href = '/login';
  //  return this.http.post<ApiResponse<AuthUser>>(href, d);
  //}

  //getUserProfile(): Observable<UserInfo> {
  //  const href = '/api/getUserProfile';
  //  return this.http.get<UserInfo>(href);
  //}

  changePassword(d:any):Observable<any> {
    const href = '/api/changePassword';
    return this.http.post<any>(href,d);
  }
}
