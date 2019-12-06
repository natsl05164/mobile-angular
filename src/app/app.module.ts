import { LocationStrategy, PathLocationStrategy } from '@angular/common';
//import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
 
import { NgModule, ErrorHandler } from '@angular/core';

import { GlobalErrorHandler } from './core/helpers/global-error-handler.helper';
//import { HttpModule } from '@angular/http';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { AppInitializationModule } from './app-initialization.module';
import { CoreModule } from './core/core.module';
import { ThemeModule } from './layout/theme.module';


import { AlertService } from './shared/components/alert/services/alert.service';
import { AlertComponent } from './shared/components/alert/alert.component';


import { NgUniversalModule } from '@trilon/ng-universal';

import { BROWSER_FAVICONS_CONFIG, BrowserFavicons, Favicons } from "./core/helpers/favicon.helper";
import { AppLandingView } from './app-views/app-landing/app-landing.view';
import { AppView } from './app-views/app/app.view';



@NgModule({
    declarations: [
        AppComponent,
        AlertComponent,
        AppLandingView,
        AppView
    ],
    //entryComponents: [RegisterComponent, ResetPasswordComponent],
    imports: [
        // Angular modules
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        BrowserTransferStateModule,
        //HttpClientModule,
        BrowserAnimationsModule,

        // App initialization module
         AppInitializationModule,

        // Core "singleton" modules (not feature modules)
        CoreModule,
        ThemeModule,// 

        // Feature modules -non lazy

        // App routing - should be the last import!
        AppRoutingModule,
        NgUniversalModule,
         
    ],
    providers: [
        {
            provide: ErrorHandler,
            useClass: GlobalErrorHandler
        },
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        { provide: 'LOCALSTORAGE', useFactory: getLocalStorage },
        // The Favicons is an abstract class that represents the dependency-injection
        // token and the API contract. THe BrowserFavicon is the browser-oriented
        // implementation of the service.
        {
            provide: Favicons,
            useClass: BrowserFavicons
        },
        // The BROWSER_FAVICONS_CONFIG sets up the favicon definitions for the browser-
        // based implementation. This way, the rest of the application only needs to know
        // the identifiers (ie, "happy", "default") - it doesn't need to know the paths
        // or the types. This allows the favicons to be modified independently without
        // coupling too tightly to the rest of the code.
        {
            provide: BROWSER_FAVICONS_CONFIG,
            useValue: {
                icons: {
                    "Jacbets": { //use webTitle
                        type: "image/png",
                        href: "/assets/icons/jacbets/favicon.ico",
                        isDefault: true
                    }, 
                    "888VIPBET": {
                        type: "image/jpeg",
                        href: "/assets/icons/888VIPBET/favicon.ico"
                    },
                    "Super Func Ultimate Gaming Site": {
                        type: "image/jpeg",
                        href: "/assets/icons/888VIPBET/favicon.ico"
                    }

                },

                // I determine whether or not a random token is auto-appended to the HREF
                // values whenever an icon is injected into the document.
                cacheBusting: true
            }
        },
        AlertService
    ],
    bootstrap: [AppComponent,]
})
export class AppModule { }

export function getLocalStorage() {
    return (typeof window !== "undefined") ? window.localStorage : null;
}
