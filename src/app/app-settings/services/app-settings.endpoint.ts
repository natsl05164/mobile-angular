import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
 
import { WEBSITE_DATA_CONFIG } from '../website-data.config';
import { WebsiteData } from '../types/website-data';
import { SeoData } from '../types/seo-data';
import { LandingViewData } from '../types/landing-page'; 
import { StoreRequestStateUpdater } from '../../shared/types/store-request-state-updater';

import { ApiResponse } from '../../shared/types/api-response';


@Injectable()
export class AppSettingsEndpoint {
  constructor(private http: HttpClient) { }

    getWebsiteData(): Observable<WebsiteData> {
    const request = WEBSITE_DATA_CONFIG.requests.getWebsiteData;
 
        //return this.http.get<ApiResponse<WebsiteData>>(request.url);
        return this.http.get<ApiResponse<WebsiteData>>(request.url, { withCredentials: true }).pipe(
            map(response => {
                //requestStateUpdater(request.name, {
                //    inProgress: false,
                //});
                return response.data as WebsiteData;
            }),
            catchError((error: HttpErrorResponse) => {
                //requestStateUpdater(request.name, {
                //    inProgress: false,
                //    error: true,
                //    errorMessage: error.message
                //});

                return throwError(error);
            })
        );
  }

    getLandingPageData(): Observable<LandingViewData> {
        const request = WEBSITE_DATA_CONFIG.requests.getLandingPageData;

        //return this.http.get<ApiResponse<LandingPageData>>(request.url);
        return this.http.get<ApiResponse<LandingViewData>>(request.url, { withCredentials: true }).pipe(
            map(response => {
                //requestStateUpdater(request.name, {
                //    inProgress: false,
                //});
                return response.data as LandingViewData;
            }),
            catchError((error: HttpErrorResponse) => {
                //requestStateUpdater(request.name, {
                //    inProgress: false,
                //    error: true,
                //    errorMessage: error.message
                //});

                return throwError(error);
            })
        );
    }

    getSeoData(): Observable<SeoData[]> {
        const request = WEBSITE_DATA_CONFIG.requests.getSeoData;

        //return this.http.get<ApiResponse<LandingPageData>>(request.url);
        return this.http.get<ApiResponse<SeoData[]>>(request.url, { withCredentials: true }).pipe(
            map(response => {
                //requestStateUpdater(request.name, {
                //    inProgress: false,
                //});
                return response.data as SeoData[];
            }),
            catchError((error: HttpErrorResponse) => {
                //requestStateUpdater(request.name, {
                //    inProgress: false,
                //    error: true,
                //    errorMessage: error.message
                //});

                return throwError(error);
            })
        );
    }
   
}
