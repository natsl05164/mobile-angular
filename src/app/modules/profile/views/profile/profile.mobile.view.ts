import { Component, OnInit } from '@angular/core';
import { ProfileBase } from './profile.base';
import { UserAction } from '../../../../core/user/user.constants';
import { UserStore } from '../../../../core/user/services/user.store';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    templateUrl: './profile.mobile.view.html',
    styleUrls: ['./profile.mobile.view.scss']
})
export class ProfileMobileView extends ProfileBase implements OnInit {

    constructor(private userStore: UserStore, private route: ActivatedRoute, private router: Router) {
        super();
    }

    ngOnInit() {
    }

    onUserAction(event) {
        if (event['action'] == UserAction.Logout) {
            this.userStore.submitUserAction(event['data'], event['action']).subscribe(res => {
                const to: string = '/';
                //this.router.navigate([to]);
                //this.router.navigate([ to,

                // { 
                //    outlets: {
                //         'rightSideBar': null
                //    }
                //    }
                //   ] 
                //);
                this.router.navigate([
                    {
                        outlets: {
                            'rightSideBar': null
                        }
                    }
                ], { relativeTo: this.route.parent.parent.parent });

            });
        }
    }
}
