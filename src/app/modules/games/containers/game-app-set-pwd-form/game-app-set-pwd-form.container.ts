import { Component, OnInit, AfterViewInit,Input ,ChangeDetectionStrategy} from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { GameAppLoginStore } from '../../services/game-app-login.store';
import { UserAction } from '../../../games/games.constants';
@Component({
    selector: 'app-game-app-set-pwd-form',
    templateUrl: './game-app-set-pwd-form.container.html',
    styleUrls: ['./game-app-set-pwd-form.container.scss'],
    changeDetection : ChangeDetectionStrategy.OnPush
})
export class GameAppSetPwdFormContainer implements OnInit, AfterViewInit {
    appSetPwdForm: FormGroup;
    isSubmit: boolean;
    @Input() gameID: string;
     
    constructor(private gameAppLoginStore: GameAppLoginStore) { }

    ngOnInit() {
        this.createAppSetPwdForm();
    }

    ngAfterViewInit() { 
      this.appSetPwdForm.controls['GameID'].setValue(this.gameID);
    }
    get password() { return this.appSetPwdForm.get('Password'); } 

    private createAppSetPwdForm() {
        this.appSetPwdForm = new FormGroup({
            'Password': new FormControl('', [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(16),
                Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}') //TODO each game got different requirement leh... 
            ]),

            'GameID': new FormControl('', [
                Validators.required 
            ])
        });
    }

    onSubmit() {
        this.isSubmit = true;
        if (this.appSetPwdForm.invalid) {
            return false;
        }
        this.gameAppLoginStore.submitUserAction(this.appSetPwdForm.value, UserAction.SetGameAppPwd );
        //TODO submit action
    }
}
