import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlatformService } from '@trilon/ng-universal';
import { trigger, animate, transition, state, style } from '@angular/animations';
import { UserAction } from '../../user.constants';
import { UserStore } from '../../../user/services/user.store';
import { ApplicationStateService } from '../../../app-state/application-state.service';
import { LoggerHelper } from '../../../helpers/logger.helper';
@Component({
    selector: 'app-right-side-bar-container',
    templateUrl: './right-side-bar-wrapper.container.html',
    styleUrls: ['./right-side-bar-wrapper.container.scss'],
        animations: [trigger('slideIn', [
            state('void', style({
                width: '0'
            })),
            state('0', style({
                width: '0'
            })),
            state('1', style({
                width: '18.75rem'
            })),
            transition('0 => 1', animate('200ms ease-in')),
            transition('1 => 0', animate('200ms ease-out')),
            transition('void => 1', animate('200ms ease-in'))
        ])]
})
export class RightSideBarWrapperContainer implements OnInit {
    shouldAnimate: boolean;
    constructor(private appState: ApplicationStateService, public userStore: UserStore, private router: Router, private platformSvc: PlatformService, private logger: LoggerHelper) {
       // private router: Router, private activatedRoute: ActivatedRoute
        this.appState.getRouterOutletState$().subscribe(data => {
            console.log(data);
            if (data['component'] == this) {
                this.shouldAnimate = data['isActivated'];
            }

            if (data['action'] == UserAction.Login) {
                const loginFormData= data['data'];//login form data
                this.userStore.setRedirectUrl(this.router.url);
                this.userStore.submitUserAction(loginFormData, data['action']) //TODO need to unsubscribe??
                    .subscribe(res => {
                        //this.bsModalRef.content.isSuccess = true;
                        //this.bsModalRef.content.message = "Login success";

                        this.userStore.registerGames().toPromise().then(
                            (data) => {

                                this.logger.log(data);
                            }

                        );
                        if (this.platformSvc.isBrowser) {
                            //setTimeout(() => { this.bsModalRef.hide(); this.router.navigate(['home']); }, 2000)//2s
                            setTimeout(() => {
                            
                                const to: string = this.userStore.getRedirectUrl() || '/home';
                                this.router.navigate([to]);
                            }, 2000)//2s
                        }
                        return true;

                    }, error => {
                            throw new Error(error.message);
                    });
            }
            // this.router.navigate([
            //// NOTE: No relative-path navigation is required because we are accessing
            //// the parent's "activatedRoute" instance. As such, this will be executed
            //// as if we were doing this in the parent view component.
            //     { 
            //        outlets: {
            //             'rightSideBar': ['profile', {
            //                 outlets: { 'childOutlet': ['sideProfile']}}]  
            //        }
            //    }
            //],
            //    {
            //        relativeTo: this.activatedRoute.parent // <--- PARENT activated route.
            //    }
            // );
           

        });
    } 

    ngOnInit() {
       
  }

}
