import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AuthGuard } from '../../core/guards/auth.guard';

import { ProfileView } from './views/profile/profile.view';
import { EditView } from './views/edit/edit.view';
import { ChangePasswordView } from './views/change-password/change-password.view';

const routes: Routes = [

    {
        path: '',
        component: ProfileView,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: { title: 'Profile', showHeader: true, showFloats: false, showFooter: false },
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'edit'
            },
            {
                path: 'edit',
                component: EditView,
                data: { title: 'Edit', showHeader: true, showFloats: false, showFooter: false }
            },
            {
                path: 'change-password',
                component: ChangePasswordView,
                data: { title: 'Change Password', showHeader: true, showFloats: false, showFooter: false }
            }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class ProfileRoutingModule {

    static views = [ProfileView, EditView, ChangePasswordView];
}
