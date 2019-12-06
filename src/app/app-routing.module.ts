
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { LoginMobileComponent } from './core/user/components/login-mobile/login-mobile.component';
import { RightSideBarWrapperContainer } from './core/user/containers/right-side-bar-wrapper/right-side-bar-wrapper.container';
import { ApplicationStateService } from './core/app-state/application-state.service';

//import { AppLandingView } from './app-views/app-landing/app-landing.view';
//import { AppView } from './app-views/app/app.view';
const desktop_routes: Routes = [
    { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(mod => mod.AuthModule) },
    { path: 'games', loadChildren: () => import('./modules/games/games.module').then(mod => mod.GamesModule) },
    { path: 'profile', loadChildren: () => import('./modules/profile/profile.module').then(mod => mod.ProfileModule) },
    { path: '', loadChildren: () => import('./modules/general/general.module').then(mod => mod.GeneralModule) },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
    //{ path: '**', component: PageNotFoundComponent }


];


const mobile_routes: Routes = [
    { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(mod => mod.AuthModule) },
    { path: 'games', loadChildren: () => import('./modules/games/games.mobile.module').then(mod => mod.GamesMobileModule) },
    {
        path: 'login', component: LoginMobileComponent, outlet: 'rightSideBar'
    },
    {
        path: 'rSideBar',
        component: RightSideBarWrapperContainer,
        outlet: 'rightSideBar',
        children: [
            {
                path: 'login', component: LoginMobileComponent, outlet: 'childOutlet'
            },
            {
                path: 'profile',
                outlet: 'childOutlet',
                loadChildren: () => import('./modules/profile/profile.mobile.module').then(mod => mod.ProfileMobileModule)
            },
        ]

    },
    { path: '', loadChildren: () => import('./modules/general/general.mobile.module').then(mod => mod.GeneralMobileModule) },
    {
        path: '**',
        redirectTo: '', /*home*/
        pathMatch: 'full'
    }
];


@NgModule({
    imports: [RouterModule.forRoot(desktop_routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

    public constructor(private router: Router,
        private applicationStateService: ApplicationStateService) {

        if (applicationStateService.isMobile()) {
            router.resetConfig(mobile_routes);
        }
    }
}

