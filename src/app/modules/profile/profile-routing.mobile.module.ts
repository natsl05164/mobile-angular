import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AuthGuard } from '../../core/guards/auth.guard';

import { ProfileMobileView } from './views/profile/profile.mobile.view';
import { EditMobileView } from './views/edit/edit.mobile.view';
import { ChangePasswordMobileView } from './views/change-password/change-password.mobile.view';

const routes: Routes = [
    //{
    //    path: '',
    //    redirectTo: '/home(rightSideBar:profile/(childOutlet:sideProfile))  ', // this is important because there are no cascading redirects, see: https://github.com/angular/angular/issues/10120
    //    pathMatch: 'full',
    //},
    {
        path: '',
        component: ProfileMobileView,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: { title: 'Profile', showHeader: true, showFloats: false, showFooter: false },
        children: [
            {
                path: '',
                redirectTo: 'edit',
                pathMatch: 'full'
            },

            {
                path: 'edit',
                component: EditMobileView,
                //canActivate: [AuthGuard],
                //canActivateChild: [AuthGuard],
                data: { title: 'Edit', showHeader: true, showFloats: false, showFooter: false },

            },
            {
                path: 'change-password',
                component: ChangePasswordMobileView,
                //canActivate: [AuthGuard],
                //canActivateChild: [AuthGuard],
                data: { title: 'Change Password', showHeader: true, showFloats: false, showFooter: false },

            }

        ]

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class ProfileRoutingMobileModule {

    static views = [ProfileMobileView, EditMobileView, ChangePasswordMobileView];
}
