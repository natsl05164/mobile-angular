 
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ForgotPassword } from '../../types/forgot-password';
import { UserAction } from '../../user.constants';

//import { DynamicContent } from '../../../../shared/components/dynamic-content-outlet/types/dynamic-content';

 
import { trigger, animate, transition, state, style } from '@angular/animations';
 
import { ApplicationStateService } from '../../../app-state/application-state.service';

@Component({
  selector: 'app-login-mobile',
  templateUrl: './login-mobile.component.html',
    styleUrls: ['./login-mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
export class LoginMobileComponent implements OnInit{
  shouldAnimate: boolean;


  @Input() data: any;

  title: string= 'Login';
  subtitle: string;

  loginForm: FormGroup;
  public forgotPwdEmail: string = '';
   
  public message: string;
  public isSuccess: boolean;
  isForLogin: boolean = true;
  isSubmit: boolean;


  constructor(private appState: ApplicationStateService) {
    //this.appState.getRouterOutletState$().subscribe(data => {
    //  if (data['component'] == this) {
    //    this.shouldAnimate = data['isActivated'];
    //  }
    //});
  }

  ngOnInit() {
    this.createLoginForm();
  }

  private createLoginForm() {
    this.loginForm = new FormGroup({
      'UserName': new FormControl('', [
        Validators.required,
        Validators.maxLength(250),
        //Validators.email
      ]),
      'Password': new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(16),
      ])
    });
  }


    get userName() { return this.loginForm.get('UserName'); }
    get password() { return this.loginForm.get('Password'); }

  onLogIn() {

    this.isSubmit = true;
    if (this.loginForm.invalid) {
      return false;
    }

    //this.loginForm.value
      //this.onUserAction.emit({ action: UserAction.Login, data: this.loginForm.value });

      this.appState.sendRouterOutletState({ action: UserAction.Login, data: this.loginForm.value });
    //this.authService.login(this.loginForm.value)
    //  .subscribe(res => {
    //    this.isSuccess = res.success;
    //    if (res.success) {
    //      this.message = "Login success";
    //       // this.router.navigate(['home']);
    //      setTimeout(() => { this.router.navigate(['home']) }, 2000)//2s
    //      this.bsModalRef.hide();
    //      return true;
    //    }
    //    else {
    //      this.message = "Invalid Credentials!"; //res.message
    //    }

    //  }, error => {
    //      this.message = "Invalid Credentials!";
    //    console.error(error);
    //  });
  }

  openForgotPwdModal(e) {
      this.isForLogin = false;
      this.title = 'Forgot Password';
    e.preventDefault();
    e.stopPropagation();
    //console.log(this.bsModalRef);
    //const initialState = {

    //  title: 'Forgot Password'
    //};
    //this.bsModalRef = this.modalService.show(ForgotPasswordComponent, {
    //  class: 'modal-dialog-centered modal-sm', initialState
    //});
 
    }

    openLoginModal(e) {
        e.preventDefault();
        e.stopPropagation();
        this.isForLogin = true;
        this.title = 'Login';
    }

  onReset() {
    var forgotPassword: ForgotPassword = {
      Email: this.forgotPwdEmail
    }
    //this.UserAction.emit(forgotPassword);

    //this.onUserAction.emit({ action: UserAction.ForgotPassword, data: forgotPassword });
    //this.userService.forgotPassword(reset).subscribe((res) => {

    //  this.isSuccess = res.success;
    //  if (res.success) {
    //    this.message = "Reset password email successfully sent"; //res.message

    //    return true;
    //  }
    //  else {
    //    this.message = "Email Unable to send!"; //res.message
    //  } 
    //}, (error) => {
    //    this.message = "Email Unable to send!"; 
    //  console.error(error);
    //});
  }

  onClickSignUp() {
  //close
  }
}
