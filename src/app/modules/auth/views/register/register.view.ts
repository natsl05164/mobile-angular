import { Component, OnInit, OnDestroy} from '@angular/core';
import { UserStore } from '../../../../core/user/services/user.store';
import { UserAction } from '../../../../core/user/user.constants';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { RequestState } from '../../../../shared/types/request-state';

import { AlertService } from '../../../../shared/components/alert/services/alert.service';

import { AppSettingsService } from '../../../../app-settings/services/app-settings.service';
@Component({ 
  templateUrl: './register.view.html',
  styleUrls: ['./register.view.scss']
})
export class RegisterView implements OnInit, OnDestroy {
  private ngUnsubscribe$: Subject<undefined> = new Subject();

  requestState: RequestState;

  constructor(public userStore: UserStore, private alertSvc: AlertService, public appSettings: AppSettingsService) { }
  isSuccess: boolean;
  ngOnInit() {
 
    this.userStore.state$.pipe(takeUntil(this.ngUnsubscribe$)).subscribe((state) => {
      this.requestState = state.requests.register;
      if (state.requests.register.success) {
 
        this.alertSvc.create(
          "success!", //title
          "success", //type
          5000, // time
          "Successfully registered",
          ""
        ).then( () => {
            this.isSuccess = true;
        });
      
      } 
    });
  }
 
  submitUserAction(data, action): void {
      this.userStore.submitUserAction(data, action).pipe(takeUntil(this.ngUnsubscribe$)).subscribe((user) => {
          if (action == UserAction.Register) {
              this.alertSvc.create(
                  "success!", //title
                  "success", //type
                  5000, // time
                  "Successfully registered",
                  ""
              ).then(function () {
                  this.isSuccess = true;

              });
          } 
      });
  }
  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

}
