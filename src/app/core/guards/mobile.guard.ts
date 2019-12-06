import { Router, CanActivate } from "@angular/router";
import { ApplicationStateService } from "../app-state/application-state.service"

 
export class MobileGuard implements CanActivate {
  constructor(private _router: Router, private _appState: ApplicationStateService) { }

  canActivate(): boolean {
    const isMobile = this._appState.isMobile();
    if (isMobile) {
      this._router.navigate(['/mobile']);
    }
    return isMobile;
  }
}
