//Presentational component

//TODO add helper create LoginForm
//TODO add component LoginForm

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
//import { UserStore } from '../../services/user.store';
//import { UserService } from '../../../core/http/user.service';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Login } from '../../types/login';
import { ForgotPassword } from '../../types/forgot-password';  
import { UserAction } from '../../user.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  title: string;
  subtitle: string;
  @Output() onUserAction = new EventEmitter<{ action: UserAction, data:any }>();
  UserAction = UserAction;
 
  //@Output() onUsrActForgotPwd = new EventEmitter<ForgotPassword>();
    loginForm: FormGroup;
    resetPwdForm: FormGroup;
  public forgotPwdEmail: string = '';
   
  public message: string;
  public isSuccess: boolean;
  isForLogin: boolean = true;
  isSubmit: boolean;
  constructor( private router: Router
    , public bsModalRef: BsModalRef, private modalService: BsModalService
    ) {
  }

  ngOnInit() {
    var currentUser = JSON.parse(localStorage.getItem('user'));
    if (currentUser) {
      this.router.navigate(['home']);
    }

    this.createLoginForm();
  }

  private createLoginForm(){
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

      this.resetPwdForm = new FormGroup({
          'forgotPwdEmail': new FormControl('', [
              Validators.required,
              Validators.maxLength(250),
              Validators.email //TODO add async validator
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
    this.onUserAction.emit({ action: UserAction.Login, data: this.loginForm.value});
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
    e.preventDefault();
    e.stopPropagation();
    //console.log(this.bsModalRef);
    //const initialState = {

    //  title: 'Forgot Password'
    //};
    //this.bsModalRef = this.modalService.show(ForgotPasswordComponent, {
    //  class: 'modal-dialog-centered modal-sm', initialState
    //});
    this.bsModalRef.content.title = "Forgot Password";
    this.bsModalRef.content.subtitle = "Reset Password here";
  }

  onReset() {
    var forgotPassword: ForgotPassword = {
      Email:this.forgotPwdEmail
    }
    //this.UserAction.emit(forgotPassword);

    this.onUserAction.emit({ action: UserAction.ForgotPassword, data: forgotPassword });
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
    this.bsModalRef.hide();
  }
}
