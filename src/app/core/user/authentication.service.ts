//import { Injectable, Inject } from '@angular/core';


////import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Store } from 'rxjs-observable-store';
//import { Observable } from 'rxjs';
//import { tap,map} from 'rxjs/operators';
////import { environment } from '../../environments/environment';
//import { Login } from '../../shared/models/login.model';
//import { AuthUser } from '../../shared/models/auth-user.interface';
//import { ApiResponse } from '../../shared/models/api-response.interface';
//import { UserService } from '../http/user.service';
//const credentialsKey = 'user';


//@Injectable()
//export class AuthenticationService extends Store<AuthUser> {
//  authUser$: Observable<AuthUser>;
//  public token: string;
//  //private headers: HttpHeaders; 
//  //private readonly apiUrl = environment.apiUrl;
//  //private readonly baseUrl = environment.baseUrl;
  
//  constructor(private userSvc: UserService, @Inject('LOCALSTORAGE') private localStorage: any) {
//    super(null);
//    const authUser =this.getUser();
//    super(authUser);
//    this.authUser$ = this.state$;
//    //append headers
//    //this.headers = new HttpHeaders();
//    //this.headers.append("Content-Type", 'application/json');
//    //this.headers.append("Access-Control-Allow-Origin", "*");
//    //this.headers.append("Access-Control-Allow-Headers", "Origin, Authorization, Content-Type, Accept");

//    // set token if saved in local storage
//    //var currentUser = this.getUser();
//    //this.token = currentUser && currentUser.token;
//  }

//  login(loginData: Login): Observable<ApiResponse<AuthUser>> { 
//    return this.userSvc.login( loginData).pipe(
//        tap(
//            (res)=>{
//            if (res.success) { 
        
        
//              this.handleResponse(res.data);
//              this.localStorage && this.localStorage.setItem(credentialsKey, JSON.stringify(res.data));
//            }
//            return res;
//          }
//        )
//      );
//  }

//  logout(): void {
//    // clear token remove user from local storage to log user out
//    this.token = null;
//    this.localStorage && this.localStorage.removeItem(credentialsKey);
//    this.setState(null);
//  }

 

//  isLogin():boolean{ 
//    //if (localStorage.getItem(credentialsKey) || sessionStorage.getItem(credentialsKey)) {
//    //  return true;
//    //}
//    //return false;
//    if (this.state) {
//      return true; 
//    }

//    if (this.localStorage && this.localStorage.getItem(credentialsKey) ) {
//      return true; 
//    }
//    return false;
//  }

//  getToken() {
//    const savedCredentials = this.getUser();
//    return savedCredentials && savedCredentials['token'];
//  }

//  private handleResponse(authUser:AuthUser) :void{
//    this.setState({
//      ...this.state,
//      ...authUser,
//    });
//  }

//  getUser(): AuthUser {
     
//    if (this.state) {
//      return this.state;
//    }

//    //sessionStorage.getItem(credentialsKey)  
//    const savedCredentials = this.localStorage ?this.localStorage.getItem(credentialsKey):null;

//    if (savedCredentials) { 
//    return JSON.parse(savedCredentials) as AuthUser;
//    }

//    return null;
//  }

////Check if canActivate exists
////var currentRouteConfig = this.router.config.find(f => f.path == this.router.url.substr(1));
////if (currentRouteConfig != null && currentRouteConfig.CanActivate != null) {
////  this.redirectUrl = this.router.url;
////  this.router.navigate(['/login'])
//}
