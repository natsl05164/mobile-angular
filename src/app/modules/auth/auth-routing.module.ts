import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

 
import { ResetPwdView } from './views/reset-pwd/reset-pwd.view';
import { RegisterView } from './views/register/register.view';
const routes: Routes = [ 
  {
    path: 'reset-password/:resetToken',
    component: ResetPwdView,
    data: { title: 'Reset password', showHeader: true, showFloats: false, showFooter: false}
  },
  {
    path: 'register',
    component: RegisterView,
    data: { title: 'RegisterFormComponent', showHeader: true, showFloats: false, showFooter: false}
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]  
})



export class AuthRoutingModule {
 
}
