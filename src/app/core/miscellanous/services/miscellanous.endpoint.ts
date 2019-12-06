import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ApiResponse } from '../../../shared/types/api-response';
import { MISCELLANOUS_CONFIG } from '../miscellanous.config';
import { Miscellanous } from '../types/miscellanous';
import { StoreRequestStateUpdater } from '../../../shared/types/store-request-state-updater';


@Injectable()
export class MiscellanousEndpoint {
    constructor(private http: HttpClient) { }

    getMiscellanousData(requestStateUpdater: StoreRequestStateUpdater): Observable<Miscellanous> {
        const request = MISCELLANOUS_CONFIG.requests.getMiscellanous;
        requestStateUpdater(request.name, {
            inProgress: true,
        });
        return this.http.get<ApiResponse<Miscellanous>>(request.url, { withCredentials: true }).pipe(
            map(response => {
                requestStateUpdater(request.name, {
                    inProgress: false,
                });
                return response.data as Miscellanous;
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
