import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { User } from '../../../core/user/types/user';

@Component({
    selector: 'app-top-bar-mobile',
    templateUrl: './top-bar-mobile.component.html',
    styleUrls: ['./top-bar-mobile.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBarMobileComponent implements OnInit {
    @Input() urlSiteLogo: string;
    @Input() auth: User;
    @Output() onToggleSideNav = new EventEmitter();

    @ViewChild('btnToggleSideNav', { static: false }) btnToggleSideNav: ElementRef;
    constructor() { }

    ngOnInit() {

    }
    toggleSideNav() {
        this.onToggleSideNav.emit();
    }
}
