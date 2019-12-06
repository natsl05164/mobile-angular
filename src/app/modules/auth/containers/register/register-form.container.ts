import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, AsyncValidatorFn } from '@angular/forms';


import { UserAction } from '../../../../core/user/user.constants';
import { Observable } from 'rxjs';
import { CAPTCHA_URL } from '../../../../configs/app.constants';
import { RequestState } from '../../../../shared/types/request-state';
import { RegisterHttpValidators } from '../../services/register-http-validators.service';
@Component({
    selector: 'app-register-form',
    templateUrl: './register-form.container.html',
    styleUrls: ['./register-form.container.scss'],
    providers: [RegisterHttpValidators]
})
export class RegisterFormContainer implements OnInit {

    registerForm: FormGroup;

    isFormSubmitted: boolean = false;

    captcha_srcURL=CAPTCHA_URL;
    @Input() requestState: RequestState;

    @Output() onUserAction = new EventEmitter<{ action: UserAction, data: any }>();
    constructor(private registerHttpValidators: RegisterHttpValidators) { }

    ngOnInit() {
        this.createForm();
    }

    createForm() {

        this.registerForm = new FormGroup({
            Email: new FormControl(null, { validators: Validators.compose([Validators.required, Validators.email]), asyncValidators: [this.validateEmailIsNew()], updateOn: 'blur' }),
            Username: new FormControl(null, { validators: [Validators.required, Validators.minLength(7)], asyncValidators: [this.validateUserNameIsNew()], updateOn: 'blur' }),
            FullName: new FormControl(null, { validators: [Validators.required, Validators.minLength(7)] }),
            Password: new FormControl(null, { validators: [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')] }),
            ConfirmPassword: new FormControl(null, { validators: [Validators.required] }),
            Refferal: new FormControl(null, { validators: [Validators.required, Validators.minLength(5)] }),
            Phone: new FormControl(null, { validators: [Validators.required] }),
            SecurityQue: new FormControl(null, { validators: [Validators.required] }),
            SecurityAns: new FormControl(null, { validators: [Validators.required, Validators.minLength(7)] }),
            Captcha: new FormControl(null, { validators: [Validators.required], asyncValidators: [this.validateCaptcha()], updateOn: 'blur' }),
            Terms: new FormControl(null, { validators: [Validators.required] }),
            DOB: new FormControl(new Date()),
        });
    }



    get Email() { return this.registerForm.get('Email'); }
    get Username() { return this.registerForm.get('Username'); }
    get FullName() { return this.registerForm.get('FullName'); }
    get Password() { return this.registerForm.get('Password'); }
    get ConfirmPassword() { return this.registerForm.get('ConfirmPassword'); }
    get Refferal() { return this.registerForm.get('Refferal'); }
    get Phone() { return this.registerForm.get('Phone'); }
    get SecurityQue() { return this.registerForm.get('SecurityQue'); }
    get SecurityAns() { return this.registerForm.get('SecurityAns'); }
    get Captcha() { return this.registerForm.get('Captcha'); }
    get Terms() { return this.registerForm.get('Terms'); }
    get DOB() { return this.registerForm.get('DOB'); }


    checkPasswords(group: FormGroup) { // here we have the 'passwords' group
        let pass = group.controls.password.value;
        let confirmPass = group.controls.confirmPass.value;

        return pass === confirmPass ? null : { notSame: true }
    }


    validateEmailIsNew(): AsyncValidatorFn {
        return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {

            return this.registerHttpValidators.validateEmailIsNew(control.value);

        }
    }

    validateUserNameIsNew(): AsyncValidatorFn {
        return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {

            return this.registerHttpValidators.validateUserNameIsNew(control.value);

        }
    }

    validateCaptcha(): AsyncValidatorFn {
        return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {

            return this.registerHttpValidators.validateCaptcha(control.value);

        }
    }

    onRegister() {
        this.isFormSubmitted = true;
        console.log(this.registerForm.value);
        if (this.registerForm.valid) {

            this.onUserAction.emit({ action: UserAction.Register, data: this.registerForm.value });
            //this.userStore.register(this.registerForm.value).subscribe((res) => {
            //  if (res.status === 'success') {
            //    // this.toasterService.pop('success', appToaster.successHead, res.message);
            //    // this.router.navigate(['/auth/login']);

            //    //console.log(res.message);
            //  } else {
            //    //this.toasterService.pop('error', appToaster.errorHead, res.message);
            //    //this.router.navigate(['/client/signup']);

            //  }
            //});

        }


        return;
    }

}
