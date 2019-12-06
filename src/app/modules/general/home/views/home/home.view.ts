import { ChangeDetectorRef } from '@angular/core'; //, HostListener 
import { AppSettingsService } from '../../../../../app-settings/services/app-settings.service';

import { HomeStore } from '../../services/home.store';
//Mobile
import { ApplicationStateService } from '../../../../../core/app-state/application-state.service';
import { MiscellanousStore } from '../../../../../core/miscellanous/services/miscellanous.store';
import { Slide } from '../../../../../shared/components/main-carousel/types/slide';
export abstract class HomeView {

    public title: string = 'Home';
    public announcement: string = '';
    public isAnnJPError: boolean = false; 
    public newGames: any;
    public slides: Slide[] = [];

    constructor(private cd: ChangeDetectorRef, public appSettings: AppSettingsService, private appState: ApplicationStateService, public store: HomeStore, public miscStore: MiscellanousStore) {
        if (this.appState.isMobile()) {
            this.store.init();
            this.store.loadNewGames$().toPromise().then((data) => {
                this.newGames = data;
                this.cd.markForCheck();
            });
        }
    }

    ngOnInit() {
        //promise is only one time then does not give the state update
        //this.miscStore.state$.toPromise().then((data) => {
        //    if (!data.requests.getMiscellanousData.inProgress) {
        //        this.announcement = data.requests.getMiscellanousData.error ? "error" : data.miscellanousData.Announcement;
        //        this.isAnnJPError = data.requests.getMiscellanousData.error;
        //        this.cd.markForCheck();
        //    }
        //});
        this.miscStore.state$.subscribe((data) => {
            if (!data.requests.getMiscellanousData.inProgress) { 
              this.announcement = data.requests.getMiscellanousData.error ? "error" : data.miscellanousData.Announcement;
              this.isAnnJPError = data.requests.getMiscellanousData.error;
              this.slides = data.miscellanousData.BannerSlides;
              this.cd.markForCheck();
            }
        });
    }



}
