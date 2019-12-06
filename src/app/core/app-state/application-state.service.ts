import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PlatformService } from '@trilon/ng-universal';
@Injectable({
  providedIn: 'root'
})
export class ApplicationStateService {

    private isMobileResolution: boolean;

    public countryCode: string;

    public langCode: string;

  constructor(private platformSvc: PlatformService) {
    if (this.platformSvc.isBrowser) {
      if (window.innerWidth < 992) {
        this.isMobileResolution = true;
      } else {
        this.isMobileResolution = false;
      }
    }
  }

  public isMobile(): boolean {
    return this.isMobileResolution;
  }

  private routerOutletState$ = new Subject<any>();//TODO should put here meh?? shit dunno leh...  

  sendRouterOutletState(data: Object) { //{outlet:string,isActivate: boolean}
    this.routerOutletState$.next(data);
  }

  clearRouterOutletState() {
    this.routerOutletState$.next();
  }

  getRouterOutletState$(): Observable<any> {
    return this.routerOutletState$.asObservable();
  }
}
