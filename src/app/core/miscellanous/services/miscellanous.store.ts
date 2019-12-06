import { Injectable, OnDestroy } from '@angular/core';
import { Store } from 'rxjs-observable-store';
import { Subject, Observable, interval } from 'rxjs';
import { map, tap, switchMap, retry, takeUntil  } from 'rxjs/operators';

import { MiscellanousEndpoint } from './miscellanous.endpoint';
import { MiscellanousStoreState } from './miscellanous.store.state';

import { Miscellanous } from '../types/miscellanous';
//import { Login } from '../types/login';
import { StoreRequestStateUpdater } from '../../../shared/types/store-request-state-updater';
import { AppSettingsService } from '../../../app-settings/services/app-settings.service';
import * as endpointHelpers from '../../../shared/helpers/endpoint.helpers';
//import { UserAction } from '../../../core/user/user.constants';
import { CurrencyPipe } from '@angular/common';


@Injectable()
export class MiscellanousStore extends Store<MiscellanousStoreState> implements OnDestroy {

    private storeRequestStateUpdater: StoreRequestStateUpdater;
    private ngUnsubscribe$: Subject<undefined> = new Subject();
    //private reloadMiscellanousData$: Subject<undefined> = new Subject();
 
    public jackpotAmount$: Observable<string>;

    constructor(private endpoint: MiscellanousEndpoint, private appSetttings: AppSettingsService, private currencyPipe: CurrencyPipe) {
        super(new MiscellanousStoreState());
        this.storeRequestStateUpdater = endpointHelpers.getStoreRequestStateUpdater(
            this
        );
         
    }

     

    public initMiscellanousData$(): Observable<Miscellanous> {
        return this.endpoint.getMiscellanousData(this.storeRequestStateUpdater).pipe(
            tap((miscellanousData: Miscellanous) => {
                this.handleMiscellanousResponse(miscellanousData);
                this.jackpotAmount$ = this.initJackpotAmount$();
            }), 
            takeUntil(this.ngUnsubscribe$)
        );
    }

     
    //getAllGamesViewByCategory(d: string) {
    //  return this.endpoint.getAllGamesViewByCategory(d, this.storeRequestStateUpdater).pipe(

    //    tap((gamesView: GamesView) => {
    //      this.handleGetUserResponse(gamesView);
    //    })
    //  ); 
    //}

    ngOnDestroy(): void {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
    }

    private handleMiscellanousResponse(miscellanousData: Miscellanous): void {
        this.setState({
            ...this.state,
            miscellanousData: miscellanousData,
        });
    }

    private initJackpotAmount$(): Observable<string> {
        const intervalMs = 100;
        return interval(intervalMs).pipe(map(
            () => {
                return this.appSetttings.websiteData.CurrenyCode + " " + this.currencyPipe.transform((this.state.miscellanousData.Jackpot + Math.random() / 10).toFixed(2));

            }), takeUntil(this.ngUnsubscribe$));

    }
}
