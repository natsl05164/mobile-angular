import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserStore } from './user/services/user.store';
import { UserEndpoint } from './user/services/user.endpoint';
import { AuthGuard } from './guards/auth.guard';
import { MiscellanousStore } from './miscellanous/services/miscellanous.store';
import { MiscellanousEndpoint } from './miscellanous/services/miscellanous.endpoint'; 
//import { ErrorHandlerInterceptor } from './interceptors/error-handler.interceptor';
//import { ApiPrefixInterceptor } from './interceptors/api-prefix.interceptor';
import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';
import { CachingInterceptor } from './interceptors/caching.interceptor';
import { LoginComponent } from './user/components/login/login.component';
import { LoginMobileComponent } from './user/components/login-mobile/login-mobile.component';
import { RightSideBarWrapperContainer } from './user/containers/right-side-bar-wrapper/right-side-bar-wrapper.container';

import { CurrencyPipe } from '@angular/common';
 
import { RequestCache } from './interceptors/services/request-cache.service';

@NgModule({
    declarations: [LoginComponent, LoginMobileComponent, RightSideBarWrapperContainer ],
    exports: [CommonModule,
        RouterModule,
        HttpClientModule,
        LoginComponent, LoginMobileComponent, RightSideBarWrapperContainer ],
    imports: [CommonModule,
        RouterModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule 
    ],
    providers: [
        CurrencyPipe,
        UserStore,
        UserEndpoint,
        MiscellanousEndpoint,
        MiscellanousStore, 
        AuthGuard,
        RequestCache,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CachingInterceptor,
            multi: true
        },
        //{
        //    provide: HTTP_INTERCEPTORS,
        //    useClass: HttpTokenInterceptor,
        //    multi: true
        //}
        //{
        //  provide: HTTP_INTERCEPTORS,
        //  useClass: ErrorHandlerInterceptor,
        //  multi: true,
        //},
        //{
        //  provide: HTTP_INTERCEPTORS,
        //  useClass: ApiPrefixInterceptor,
        //  multi: true,
        //}
    ],
    entryComponents: [LoginComponent, LoginMobileComponent, RightSideBarWrapperContainer]
})
export class CoreModule {
    constructor(
        @Optional()
        @SkipSelf()
        parentModule: CoreModule
    ) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only.'
            );
        }
    }

//    static forRoot(config: UserServiceConfig): ModuleWithProviders {
//  return {
//    ngModule: GreetingModule,
//    providers: [
//      {provide: UserServiceConfig, useValue: config }
//    ]
//  };
//}

}
