import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, } from '@angular/router';
import { UserStore } from '../user/services/user.store';
import { LoggerHelper } from '../helpers/logger.helper';
import { Observable } from 'rxjs';
import { AlertService } from '../../shared/components/alert/services/alert.service';
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private logger: LoggerHelper, private userStore: UserStore, private alertSvc: AlertService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.chekUser(route, state);

  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.chekUser(childRoute, state);
  }

  private chekUser(route, state): boolean {
    //const userType = this.authenticationService.getUserType();
    const isLogin = this.userStore.isLogin();
    if (isLogin) {
      return true;
    } else if (!isLogin) {
      //this.toasterService.pop('error', appToaster.errorHead, 'Unauthorized: Access is denied');
      // this.router.navigate(['/client/dashboard']);
      //this.logger.log('Please login to continue');
      this.alertSvc.create(
        "Warning!", //title
        "info", //type
        3000, // time,
        "Not authenticated. Redirecting...",
         ""
      ).then(
        ()=> {
        this.router.navigate(['home']); 
      });
      //this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }
}
