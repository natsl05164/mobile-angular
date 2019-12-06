import { Injectable, OnDestroy } from '@angular/core';
import { Store } from 'rxjs-observable-store';
import { Subject, Observable } from 'rxjs';
import { map, tap, switchMap, retry, takeUntil } from 'rxjs/operators';

import { GamesEndpoint } from './games.endpoint';
import { SlotGamesStoreState } from './slot-games.store.state';

import { SlotGamesView } from '../types/slot-games-view';
//import { Login } from '../types/login';
import { StoreRequestStateUpdater } from '../../../shared/types/store-request-state-updater';

import * as endpointHelpers from '../../../shared/helpers/endpoint.helpers';
//import { UserAction } from '../../../core/user/user.constants';
import { DialogComponent } from '../../../shared/components/dialog/dialog.component';
import { Game } from '../../../shared/types/game';

@Injectable()
export class SlotGamesStore extends Store<SlotGamesStoreState> implements OnDestroy {
  slotGamesView$: Observable<SlotGamesView>;
  private storeRequestStateUpdater: StoreRequestStateUpdater;
  private ngUnsubscribe$: Subject<undefined> = new Subject();
  private reloadGamesView$: Subject<undefined> = new Subject();
  private detailsModal: DialogComponent;

  constructor(private endpoint: GamesEndpoint) {
    super(new SlotGamesStoreState());

    //this.gamesView$ = this.state$.pipe(map(state => state.gamesView));

  }


  init(strGameSubCategory: string): void {
    this.initReloadGamesView$(strGameSubCategory);

    this.storeRequestStateUpdater = endpointHelpers.getStoreRequestStateUpdater(
      this
    );
  }

  reloadGamesView(): void {
    this.reloadGamesView$.next();
  }

  private initReloadGamesView$(strGameSlotProvider: string): void {
    this.reloadGamesView$
      .pipe(
        switchMap(() => {
          return this.endpoint.getAllGamesViewBySlotProvider(
              strGameSlotProvider,
            this.storeRequestStateUpdater
          );
        }),
        tap((slotGamesView: SlotGamesView) => {
          this.handleGetUserResponse(slotGamesView);
        }),
        retry(),
        takeUntil(this.ngUnsubscribe$)
      )
      .subscribe();
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

  private handleGetUserResponse(slotGamesView: SlotGamesView): void {
    this.setState({
      ...this.state,
      slotGamesView: slotGamesView,
    });
  }


  setDetailsModal(detailsModal: DialogComponent): void {
    this.detailsModal = detailsModal;
  }

  openDetailsModal(game: Game): void {
    this.setDetailsModalState(game);
    this.detailsModal.open();
  }

  closeDetailsModal(): void {
    this.setDetailsModalState(null);
    this.detailsModal.close();
  }

  setDetailsModalState(game: Game): void {
    this.setState({
      ...this.state,
      gameDetailsModal: {
        game: game,
      },
    });
  }

}
