import { Component , Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserAction } from '../../../../core/user/user.constants';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent  {

  @Output() onUserAction = new EventEmitter<{ action: UserAction, data: any }>();

  chgPwdForm: FormGroup;
  isFormSubmitted: boolean = false;
  isSuccess: boolean = false;

 
  constructor(  ) {
    this.createForm();
  }

 
  createForm() {
    this.chgPwdForm = new FormGroup({
      CurrentPwd: new FormControl(null, { validators: [Validators.required]  }),
      NewPwd: new FormControl(null, { validators: [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')] }), //BankId
      ConfirmPwd: new FormControl(null, { validators: [Validators.required] }) 
    });

  }


  get CurrentPwd() { return this.chgPwdForm.get('CurrentPwd'); }
  get NewPwd() { return this.chgPwdForm.get('NewPwd'); }
  get ConfirmPwd() { return this.chgPwdForm.get('ConfirmPwd'); }


  onSubmitChgPwd() {

    //console.log(this.chgPwdForm.value);
    this.isFormSubmitted = true;


    if (this.chgPwdForm.valid) {

      this.onUserAction.emit({ action: UserAction.ChangePassword, data: this.chgPwdForm.value });

      //this.userSvc.changePassword(this.chgPwdForm.value).subscribe((res) => {
      //  if (res.status === 'success') {
      //    // this.toasterService.pop('success', appToaster.successHead, res.message);
 
      //    this.isSuccess = true;
      //  //  console.log(res.message);
      //  } else {
      //    //this.toasterService.pop('error', appToaster.errorHead, res.message);
      //    //this.router.navigate(['/client/signup']);
      //  //  console.log(res.message);
      //    this.isSuccess = false;
      //  }
      //});
    }

    return
  }
}
