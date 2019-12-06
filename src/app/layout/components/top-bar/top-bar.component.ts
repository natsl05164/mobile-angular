import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LoginComponent } from '../../../core/user/components/login/login.component';
//import { RegisterComponent } from '../auth/register/register.component';
import { UserAction } from '../../../core/user/user.constants';

import { User } from '../../../core/user/types/user';


import { ModalRefController } from '../../types/modal-ref-controller';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBarComponent implements OnInit {
    bsModalRef: BsModalRef;

    //authService: AuthenticationService;
    //@Output() logout = new EventEmitter();
    modalRefController: ModalRefController;
    @Input() auth: User;
    @Input() urlSiteLogo: string;
    @Output() onUserAction = new EventEmitter();

    private _announcement: string;

    @Input() set announcement(value: string) {
        this._announcement = value;
    }

    get announcement() {
        return this._announcement;
    }
    //@Input() set annContent() { };
    constructor(private modalService: BsModalService) {


    }

    ngOnInit() {

    }

    openLoginModal() {
        const initialState = {

            title: 'LOGIN',
            subtitle: 'Sign in to your account here.'
        };
        this.bsModalRef = this.modalService.show(LoginComponent, {
            class: 'modal-dialog-centered modal-sm', initialState
        });
        this.modalRefController = getModalRefController(this.bsModalRef);
        this.bsModalRef.content.onUserAction.subscribe(($e) => {
            //console.log($e);

            this.onUserAction.emit({ action: $e.action, data: $e.data, modalRefController: this.modalRefController });

        });
        this.bsModalRef.content.closeBtnName = 'Close';
    }



    onLogout() {
        this.onUserAction.emit({ action: UserAction.Logout, data: null });
        //this.userStore.submitUserAction(null, );
        //location.reload();
        // this.router.navigate(['/login']);
    }

}


function getModalRefController(modalRef: BsModalRef): ModalRefController {
    return (isSuccess, message) => {
        modalRef.content.isSuccess = isSuccess;
        modalRef.content.message = message;

        return modalRef;
    }

}


