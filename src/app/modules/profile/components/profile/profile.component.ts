import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { UserAction } from '../../../../core/user/user.constants';
@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {
    ProfileSection: string;
    @Input() isMobile: boolean = false;
    @Output() onUserAction = new EventEmitter();
    constructor() { }

    onLogout() {
        this.onUserAction.emit({ action: UserAction.Logout, data: null });
        //this.userStore.submitUserAction(null, );
        //location.reload();
        // this.router.navigate(['/login']);
    }
}
