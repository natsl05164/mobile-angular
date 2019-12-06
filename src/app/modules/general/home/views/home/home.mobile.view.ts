import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; //, HostListener 
import { AppSettingsService } from '../../../../../app-settings/services/app-settings.service';
import { HomeStore } from '../../services/home.store';
import { HomeEndpoint } from '../../services/home.endpoint';
import { UserStore } from '../../../../../core/user/services/user.store';
import { MiscellanousStore } from '../../../../../core/miscellanous/services/miscellanous.store';
//Mobile
import { ApplicationStateService } from '../../../../../core/app-state/application-state.service';
import { HomeView } from './home.view'
@Component({
    selector: 'app-home',
    templateUrl: './home.mobile.view.html',
    styleUrls: ['./home.mobile.view.scss'],
    providers: [HomeEndpoint, HomeStore]
})
export class HomeMobileView extends HomeView implements OnInit {

    constructor(cd: ChangeDetectorRef, appSettings: AppSettingsService, appState: ApplicationStateService, store: HomeStore, public userStore: UserStore, miscStore: MiscellanousStore) {
        super(cd, appSettings, appState, store, miscStore);

    }


}
