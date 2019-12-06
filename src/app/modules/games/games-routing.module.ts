import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubGamesView } from './views/sub-games/sub-games.view';
import { MainGamesView } from './views/main-games/main-games.view';
import { GameFrameView } from './views/game-frame/game-frame.view';
import { GameType } from '../../layout/menu.constants';
const routes: Routes = [
    {
        path: 'sports',
        component: MainGamesView,
        data: { title: 'Sports', gameCategory: GameType.SPORTS, template: 2 },

    },
    {
        path: 'slots',
        component: MainGamesView,
        data: { title: 'Slots', gameCategory: GameType.SLOTS, template: 1 }
    },
    {
        path: 'slots/:gameID',
        component: SubGamesView,

    },
    {
        path: 'live_casino',
        component: MainGamesView,
        data: { title: 'Live Casino', gameCategory: GameType.CASINO, template: 3 }
    },
    {
        path: 'sports/:sportsName',
        component: GameFrameView,
        data: { title: '[sportsName]' },
    }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GamesRoutingModule {
    static views = [SubGamesView, MainGamesView];
}
