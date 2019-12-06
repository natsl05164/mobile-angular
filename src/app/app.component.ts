import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, ChildActivationEnd } from '@angular/router';
import { LayoutService } from './layout/services/layout.service';
import { combineLatest, of } from 'rxjs';
import { filter, map, tap, catchError } from 'rxjs/operators';
// Import the application components and services.
import { Favicons } from "./core/helpers/favicon.helper";
import { SeoHelper } from "./core/helpers/seo.helper";
import { AppSettingsService } from './app-settings/services/app-settings.service';
import { ApplicationStateService } from './core/app-state/application-state.service';
import { SeoData } from './app-settings/types/seo-data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'angular';
    //showHeader = false;
    //showSidebar = false;
    //showFooter = false;
    //languages = [];
    currentUrl = '';
    countryCode = '';
    langCode = '';
    private _isRouteEventCalled: boolean = false;
    constructor( private appState: ApplicationStateService, private router: Router, private activatedRoute: ActivatedRoute, private layoutService: LayoutService, private favicons: Favicons, private appSettings: AppSettingsService, private seoHelper: SeoHelper) {

        //this.router.events
        //  .pipe(filter(event => event instanceof NavigationEnd))
        //  .subscribe((event: NavigationEnd) => {
        //    this.currentUrl = this.router.url;
        //  });


    }

    ngOnInit() {
        //this.languages = Languages;
     

        this.seoHelper.initSEO(this.appSettings.websiteData);
        this.favicons.activate(this.appSettings.websiteData.WebTitle);
        const observables = [];
        observables.push(this.router.events.pipe(filter(event => event instanceof NavigationEnd),
            tap(() => {
                this.currentUrl = this.router.url;
            }),
            map(() => {
                let route = this.activatedRoute.firstChild;
                let child = route;

                while (child) {
                    if (child.firstChild) {
                        child = child.firstChild;
                        route = child;
                    } else {
                        child = null;
                    }
                }
                return route;
            }), //mergeMap(route => route.data)

        ));

        observables.push(this.appSettings.loadSeoData().pipe(catchError(() => of(null))));
        combineLatest<[ActivatedRoute , SeoData]>(observables).subscribe((r) => {
            //console.log(data);

            if (r[0] instanceof ActivatedRoute ) {
                const route = <ActivatedRoute>r[0];
                this._isRouteEventCalled = true;
                this.countryCode = route.snapshot.params['country-code'];
                this.langCode = route.snapshot.params['langCode'];

                this.layoutService.sendShowLayout(route.data);
            }

            this.setSeoForPage();
            //if (!this.appSettings.websiteData.WebTitle && this.countryCode) {
            //    this.appSettings.initLandingViewData().toPromise();
            //}
           
          }
        );
        //  .subscribe(event => {
        //  console.log(event)
        //      if (event instanceof NavigationEnd) {
        //        console.log('1');
        //    this.showHeader = this.activatedRoute.firstChild.snapshot.data.showHeader !== false;
        //    this.showSidebar = this.activatedRoute.firstChild.snapshot.data.showSidebar !== false;
        //    this.showFooter = this.activatedRoute.firstChild.snapshot.data.showFooter !== false;
        //        console.log(this.showHeader );
        //        console.log(this.activatedRoute);
        //    this.layoutService.sendShowLayout({ showHeader: this.showHeader, showSidebar: this.showSidebar, showFooter:this.showFooter})
        //  }
        //});


    }

    private setSeoForPage(): void {

        if (this._isRouteEventCalled  && this.appSettings.seoData.length > 0) {

            for (let i = 0; i < this.appSettings.seoData.length; i++) {
                if (this.appSettings.seoData[i].slug == this.currentUrl) {
                    this.seoHelper.generateTags(this.appSettings.seoData[i]);
                    break;
                }
            }
         
        }
    }

}
