import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserStore } from '../../../../core/user/services/user.store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { RequestState } from '../../../../shared/types/request-state';

import { AlertService } from '../../../../shared/components/alert/services/alert.service';

import { ActivatedRoute } from '@angular/router';
@Component({
  //selector: 'app-reset-pwd',
  templateUrl: './reset-pwd.view.html',
  styleUrls: ['./reset-pwd.view.scss']
})
export class ResetPwdView implements OnInit, OnDestroy {
  isTokenValid: boolean = false;
  public warningMessage: string;
  public invalidTokenMessage: string;

  private ngUnsubscribe$: Subject<undefined> = new Subject();

  requestState: RequestState;
  private strToken: string;
  constructor(private route: ActivatedRoute, public userStore: UserStore, private alertSvc: AlertService) {
      this.strToken = this.route.snapshot.params['resetToken'];
     
    this.userStore.validateResetPwdToken(this.strToken)
      .subscribe(res => {

        // no error then 
        this.isTokenValid = true;
        

      }, error => {
        this.invalidTokenMessage = error.message;//TODO : session expired
        this.isTokenValid = false;
      });
  }

  ngOnInit() {

    this.userStore.state$.pipe(takeUntil(this.ngUnsubscribe$)).subscribe((state) => {
      this.requestState = state.requests.resetPassword;
      if (this.requestState.success) {

        this.alertSvc.create(
          "success!", //title
          "success", //type
          5000, // time
          "Reset password success",
          ""
        ).then(function () {
          this.router.navigate(['home']);

        });
         
      }
      else if (this.requestState.error) {
        this.warningMessage = "Reset password failed"; //tODO add error message
           //console.error(error);
      }

    });
  }

  //    this.userService.resetPassword(this.resetForm.value)
  //.subscribe(res => {
  //  if (res.status === 'success') {
  //    this.successMessage = "Reset password success";

  //    setTimeout(() => { this.router.navigate(['home']); }, 2000)//2s

  //    return true;
  //  }

  //}, error => {
  //  this.warningMessage = error.message;
  //  console.error(error);
  //});

  onUserAction($event) {

    this.userStore.submitUserAction({ ...$event.data, ResetPwdToken: this.strToken }, $event.action);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
