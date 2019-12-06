import { Injectable } from '@angular/core';
import { PlatformService } from '@trilon/ng-universal';
@Injectable({
  providedIn: 'root'
})
export class LoggerHelper{

  constructor(private platformSvc: PlatformService) { }

  log(msg: string) {
    if (this.platformSvc.isBrowser) { 
      console.log(msg);
    }
  }

  logError(msg: string) {
    if (this.platformSvc.isBrowser) {
      console.error(msg);
    }
  }

}
