import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ApiResponse } from '../../shared/types/api-response';
import { LAYOUT_CONFIG } from '../layout.config';
import { MainNavMenu } from '../types/main-nav-menu';
    
import { StoreRequestStateUpdater } from '../../shared/types/store-request-state-updater';



@Injectable()
export class LayoutEndpoint {
  constructor(private http: HttpClient) { }

  getMainMenuItems(requestStateUpdater: StoreRequestStateUpdater): Observable<MainNavMenu[]> {
    const request = LAYOUT_CONFIG.requests.getMainMenuItems;
    requestStateUpdater(request.name, {
      inProgress: true,
    });
      return this.http.get<ApiResponse<MainNavMenu[]>>(request.url, { withCredentials: true }).pipe(
      map(response => {
        requestStateUpdater(request.name, {
          inProgress: false,
        });
        return response.data as MainNavMenu[];
      }),
      catchError((error: HttpErrorResponse) => {
        requestStateUpdater(request.name, {
          inProgress: false,
          error: true,
        });
        return throwError(error);
      })
    );
  }
   
}
