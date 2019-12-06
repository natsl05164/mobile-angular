import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RequestState } from '../../../../shared/types/request-state';
import { UserAction } from '../../../../core/user/user.constants';
@Component({
    selector: 'app-reset-pwd-form',
    templateUrl: './reset-pwd-form.container.html',
    styleUrls: ['./reset-pwd-form.container.scss']
})
export class ResetPwdFormContainer implements OnInit {
    resetForm: FormGroup;
    public warningMessage: string;
    public successMessage: string;
    isSubmit: boolean;
    @Input() requestState: RequestState;

    @Output() onUserAction = new EventEmitter<{ action: UserAction, data: any }>();

    constructor() {
        this.createLoginForm();
    }

    ngOnInit() {
    }

    private createLoginForm() {
        this.resetForm = new FormGroup({
            'email': new FormControl('', [
                Validators.required,
                Validators.maxLength(250),
                Validators.email
            ]),
            'password': new FormControl('', [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(16),
                Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
            ]),
            'confirmPassword': new FormControl('', [
                Validators.required
            ])
        });
    }
    get email() { return this.resetForm.get('email'); }
    get password() { return this.resetForm.get('password'); }
    get confirmPassword() { return this.resetForm.get('confirmPassword'); }


    onReset() {
        //console.log('reset');

        this.isSubmit = true;
        if (this.resetForm.invalid) {
            return false;
        }
        this.onUserAction.emit({ action: UserAction.ResetPassword, data: this.resetForm.value });

    }
}
