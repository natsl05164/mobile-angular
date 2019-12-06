import { NgModule } from '@angular/core'; 
import { ThemeModule } from '../../layout/theme.module';
import { SharedModule } from '../../shared/shared.module'; /*TODO*/
import { AuthRoutingModule } from './auth-routing.module';

import { RegisterComponent } from './components/register/register.component';
import { RegisterSuccessComponent } from './components/register-success/register-success.component';
import { RegisterView } from './views/register/register.view'; 
import { RegisterFormContainer } from './containers/register/register-form.container'; 
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ResetPwdFormContainer} from './containers/reset-pwd-form/reset-pwd-form.container';
import { ResetPwdView } from './views/reset-pwd/reset-pwd.view'; 

@NgModule({ 
  imports: [ 
    AuthRoutingModule,
    ThemeModule,
    SharedModule
  ],
  declarations: [RegisterComponent, RegisterFormContainer, RegisterView, RegisterSuccessComponent, ResetPwdFormContainer, ResetPasswordComponent, ResetPwdView],
  providers: [] 
})
export class AuthModule { }
