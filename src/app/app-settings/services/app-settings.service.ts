import { Injectable } from '@angular/core';
 
import { Observable,throwError } from 'rxjs';
import { map,tap, catchError } from 'rxjs/operators';

import { AppSettingsEndpoint } from './app-settings.endpoint'; 
import { Requests } from '../types/requests';
import { WebsiteData } from '../types/website-data';
import { SeoData } from '../types/seo-data';
import { LandingViewData } from '../types/landing-page'; 

//import { Login } from '../types/login';
//import { StoreRequestStateUpdater } from '../../shared/types/store-request-state-updater'; 
//import * as endpointHelpers from '../../shared/helpers/endpoint.helpers';
 

 
@Injectable()
export class AppSettingsService { 
  public websiteData: WebsiteData = {} as WebsiteData;
  public seoData: SeoData[] = [];
  public landingViewData: LandingViewData = {} as LandingViewData; 
  public initialized: boolean;
  constructor(private endpoint: AppSettingsEndpoint) { 
    
  }
 
 
  initWebsiteData(): Observable<WebsiteData> {
    return this.endpoint.getWebsiteData().pipe( 
      map((d: WebsiteData) => { 
        //this.initialized = true;
        Object.assign(this.websiteData, d);
        return d as WebsiteData;
      }), catchError((error: any) => {
        //this.initialized = false;
        return  throwError(error);  
      }) 
    );
    }

    initLandingViewData(): Observable<LandingViewData> {
        return this.endpoint.getLandingPageData().pipe(
            map((d: LandingViewData) => {
                this.initialized = true;
                Object.assign(this.landingViewData, d);
                return d as LandingViewData;
            }), catchError((error: any) => {
                this.initialized = false;
                return throwError(error);
            })
        );
    }

    loadSeoData(): Observable<SeoData[]> {
        return this.endpoint.getSeoData().pipe(
            map((d: SeoData[]) => { 
                Object.assign(this.seoData, d);
                return d as SeoData[];
            }), catchError((error: any) => { 
                return throwError(error);
            })
        );
    }

   
}

