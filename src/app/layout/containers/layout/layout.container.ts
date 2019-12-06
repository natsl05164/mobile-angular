import { Component, OnInit, OnDestroy, ChangeDetectorRef, Renderer2, ElementRef, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
//import { AuthenticationService } from '../../authentication/authentication.service';
import { Router } from '@angular/router';
import { BASE_MEDIA_URL, BASE_MEDIA_URL_MOBILE } from '../../../configs/app.constants';
import { AppSettingsService } from '../../../app-settings/services/app-settings.service';
import { Subscription } from 'rxjs';
import { LayoutService } from '../../services/layout.service';
import { LayoutStore } from '../../services/layout.store';
import { LayoutEndpoint } from '../../services/layout.endpoint';
import { UserStore } from '../../../core/user/services/user.store';
import { User } from '../../../core/user/types/user';
import { UserAction } from '../../../core/user/user.constants';
import { PlatformService } from '@trilon/ng-universal';
import { ModalRefController } from '../../types/modal-ref-controller';
import { MiscellanousStore } from '../../../core/miscellanous/services/miscellanous.store';
import { Miscellanous } from '../../../core/miscellanous/types/miscellanous';
//Mobile
import { ApplicationStateService } from '../../../core/app-state/application-state.service'
import { TopBarMobileComponent } from '../../components/top-bar-mobile/top-bar-mobile.component';

import { UserAction as MenuUserAction } from '../../menu.constants'
import { DialogComponent } from '../../../shared/components/dialog/dialog.component'
import { LoggerHelper } from '../../../core/helpers/logger.helper';
//import { DynamicContentOutletComponent } from '../../../shared/components/dynamic-content-outlet/dynamic-content-outlet.component'
//import { DynamicContentItem } from '../../../shared/components/dynamic-content-outlet/types/dynamic-content-item'
//import { LoginMobileComponent } from '../../../core/user/components/login-mobile/login-mobile.component';
import { LiveChatWidgetApiModel } from '@livechat/angular-widget';
@Component({
    selector: 'app-layout',
    templateUrl: './layout.container.html',
    styleUrls: ['./layout.container.scss'],
    providers: [LayoutStore, LayoutEndpoint]
})
export class LayoutContainer implements OnInit, OnDestroy, AfterViewInit {
    isSideNavOpen: boolean;
    isOpenNavContent: boolean;
    announcement: string;
    isOpenRightSideBar: boolean;
    mainNavMenu: any;
    showHeader = false;
    showFloats = false;
    showFooter = false;
    keys: Object = {};
    auth: User;
    BASE_MEDIA_URL = BASE_MEDIA_URL;
    BASE_MEDIA_URL_MOBILE = BASE_MEDIA_URL_MOBILE;
    subscription: Subscription = new Subscription();
    @ViewChild('topBarMobile', { static: false }) topBarMobile: TopBarMobileComponent;
    @ViewChild('sideNav', { static: false }) menu: ElementRef;
    @ViewChild('mainContentContainer', { static: false }) mainContentContainer: ElementRef;
    @ViewChild('gameModal', { static: false }) gameMenuModal: DialogComponent;
    //@ViewChild('dynamicContentOutlet', { static: false }) dynamicContentOutlet: DynamicContentOutletComponent;
    liveChatApi: LiveChatWidgetApiModel
    constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2, private cd: ChangeDetectorRef, private router: Router, private layoutService: LayoutService, public appSettings: AppSettingsService, public userStore: UserStore, private platformSvc: PlatformService, private layoutStore: LayoutStore, public appState: ApplicationStateService, private logger: LoggerHelper, private miscStore: MiscellanousStore) {
        layoutStore.loadMainMenuItems().toPromise().then((data) => {
            this.mainNavMenu = data; this.cd.markForCheck();
        });

        // subscribe to home component messages
        this.subscription.add(this.layoutService.getShowLayout().subscribe(keys => {
            if (keys && !keys.hasOwnProperty('rightPushMainContent')) {
                //console.log(keys); 
                this.showHeader = keys.showHeader !== false;
                this.showFloats = keys.showFloats !== false;
                this.showFooter = keys.showFooter !== false;
            } else if (!keys || (keys && !keys.hasOwnProperty('rightPushMainContent'))) {
                // clear messages when empty message received
                this.showHeader = false;
                this.showFloats = false;
                this.showFooter = false;
            }
            else {
                this.isOpenRightSideBar = keys['rightPushMainContent'];
            }
            this.cd.markForCheck();
        }));

        this.subscription.add(   //this.authService = new AuthenticationService();
            this.userStore.user$.subscribe(user => {
                //console.log('update here');
                //console.log(state);
                //this.isLogin = (user != null);
                this.auth = user;
                this.cd.markForCheck();

            })
        );
         
        this.subscription.add(   //this.authService = new AuthenticationService();
            this.miscStore.initMiscellanousData$().subscribe((d: Miscellanous) => {
                this.announcement = d.Announcement;
                this.cd.markForCheck();
            })
        );

    }

    ngOnInit() {
        if (this.document) {
            this.renderer.removeClass(this.document.body, 'mobile');
        }

        this.userStore.updateAuthStateOnReloadPage();
      
    }

    onChatLoaded(api: LiveChatWidgetApiModel) {
        this.liveChatApi = api;
        //TODO not open
        //this.liveChatApi.set_visitor_name('Visitor');
        //this.liveChatApi.set_visitor_email('john@doe.com');
        //this.liveChatApi.on_after_load = () => {
        //    this.liveChatApi.open_chat_window();
        //}
       
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }

    onUserAction(action: UserAction, menuAction: MenuUserAction, data: any, modalRefController?: ModalRefController) {
        if (action == UserAction.Login) {
            this.userStore.setRedirectUrl(this.router.url);
            this.userStore.submitUserAction(data, action) //TODO need to unsubscribe??
                .subscribe(res => {
                    //this.bsModalRef.content.isSuccess = true;
                    //this.bsModalRef.content.message = "Login success";

                    this.userStore.registerGames().toPromise().then(
                        (data) => {

                            this.logger.log(data);
                        }

                    );

                    const modalRef = modalRefController(true, "Login success");
                    if (this.platformSvc.isBrowser) {
                        //setTimeout(() => { this.bsModalRef.hide(); this.router.navigate(['home']); }, 2000)//2s
                        setTimeout(() => {
                            modalRef.hide();
                            const to: string = this.userStore.getRedirectUrl() || '/home';
                            this.router.navigate([to]);
                        }, 2000)//2s
                    }
                    return true;

                }, error => {
                    //this.bsModalRef.content.message = "Invalid Credentials!";
                    modalRefController(false, "Invalid Credentials!");
                    // console.error(error);
                });
        }
        else if (action == UserAction.Logout) {
            this.userStore.submitUserAction(data, action).subscribe(res => {
                const to: string = this.userStore.getRedirectUrl() || '/home';
                this.router.navigate([to]);
            });
        }
        else if (menuAction == MenuUserAction.OpenNavContent) {
            this.isOpenNavContent = data;
        }
        else if (menuAction == MenuUserAction.ClickGameMenuItem) {
           
            this.layoutStore.openGameMenuModal(data);
        
        }

        return;
    }


    ngAfterViewInit() {
        /**
      * This events get called by all clicks on the page
      */

        if (this.appState.isMobile()) {

            this.renderer.addClass(document.body, 'mobile');
            this.renderer.listen('window', 'click', (e: Event) => {
                /**
                 * Only run when toggleButton is not clicked
                 * If we don't check this, all clicks (even on the toggle button) gets into this
                 * section which in the result we might never see the menu open!
                 * And the menu itself is checked here, and it's where we check just outside of
                 * the menu and button the condition abbove must close the menu
                 */
                //SL e.target['id']!='btnLogin'  TODO bad hack >_<
                if (e.target['id'] != 'btnLogin' && !this.topBarMobile.btnToggleSideNav.nativeElement.contains(e.target) && this.mainContentContainer.nativeElement.contains(e.target)) {
                    this.isSideNavOpen = false;
                    this.isOpenNavContent = false;

                    if (this.isOpenRightSideBar) {

                        //clear secondary router outlet
                        this.router.navigate([{ outlets: { rightSideBar: null } }]);
                        this.isOpenRightSideBar = false;

                    }
                }
            });

            this.layoutStore.setGameMenuModal(this.gameMenuModal);
        }
    }

    //openDynamicComponent() {
    // let dynamicComponentItem = new DynamicContentItem(LoginMobileComponent, {});
    //  this.cd.markForCheck();
    //  this.dynamicContentOutlet.loadComponent(dynamicComponentItem);

    //}
    onActivate(elementRef) {
        // you have access to the component instance
        this.appState.sendRouterOutletState({ component: elementRef, isActivated: true });
        this.isOpenRightSideBar = true;


    }
    onDeactivate(component: Component) {
        // you have access to the component instance
        this.appState.sendRouterOutletState({ component: component.selector, isActivated: false });
        this.isOpenRightSideBar = false;
    }
}
