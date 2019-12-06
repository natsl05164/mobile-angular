import { Injectable, OnDestroy } from '@angular/core';
import { Store } from 'rxjs-observable-store';
import { Subject, Observable } from 'rxjs';
import { takeUntil, map, tap } from 'rxjs/operators';

import { LayoutEndpoint } from './layout.endpoint';
import { LayoutStoreState } from './layout.store.state';

import { MainNavMenu } from '../types/main-nav-menu';
import { StoreRequestStateUpdater } from '../../shared/types/store-request-state-updater';

import * as endpointHelpers from '../../shared/helpers/endpoint.helpers';



import { DialogComponent } from '../../shared/components/dialog/dialog.component';


@Injectable()
export class LayoutStore extends Store<LayoutStoreState> implements OnDestroy {
    mainNavMenu$: Observable<MainNavMenu[]>;
    private storeRequestStateUpdater: StoreRequestStateUpdater;
    private ngUnsubscribe$: Subject<undefined> = new Subject();
    private gameMenuModal: DialogComponent;
    constructor(private endpoint: LayoutEndpoint) {
        super(new LayoutStoreState());

        this.mainNavMenu$ = this.state$.pipe(map(state => state.mainNavMenu));
        this.storeRequestStateUpdater = endpointHelpers.getStoreRequestStateUpdater(
            this
        );
    }

    //get mainNavMenu(): MainNavMenu[] {
    //  return this.state.mainNavMenu;
    //}



    ngOnDestroy(): void {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
    }

    loadMainMenuItems(): Observable<MainNavMenu[]> {
        return this.endpoint.getMainMenuItems(this.storeRequestStateUpdater).pipe(
            tap((mainNavMenu: MainNavMenu[]) => {
                this.handleGetUserResponse(mainNavMenu);
            }),
            takeUntil(this.ngUnsubscribe$)
        );
    }
    private handleGetUserResponse(mainNavMenu: MainNavMenu[]): void {
        this.setState({
            ...this.state,
            mainNavMenu: mainNavMenu,
        });
    }



    setGameMenuModal(gameMenuModal: DialogComponent): void {
        this.gameMenuModal = gameMenuModal;
    }

    openGameMenuModal(data: any): void {
        this.setGameMenuModalState(data);
        this.gameMenuModal.open();
    }

    closeDetailsModal(): void {
        this.setGameMenuModalState(null);
        this.gameMenuModal.close();
    }

    setGameMenuModalState(data: any): void {
        this.setState({
            ...this.state,
            gameMenuModal: data,
        });
    }
}
