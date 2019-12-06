import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubGamesMobileView } from './views/sub-games/sub-games.mobile.view';
import { MainGamesMobileView } from './views/main-games/main-games.mobile.view';
import { GameFrameView } from './views/game-frame/game-frame.view';
import { GameAppLoginView } from './views/game-app-login/game-app-login.view';
const routes: Routes = [
    {
        path: 'sports',
        component: MainGamesMobileView,
        data: { title: 'Sports', gameCategory: 'sports', template: 3 }
    }, 
    {
        path: 'slots',
        pathMatch: 'full',
        redirectTo: '/games/slots/(mobileSubGames:sg)' //TAKE NOTE: Hardcoded -- sg  //absolute path (start with /) for named router outer
    },
    {
        path: 'slots',
        component: MainGamesMobileView,
        data: { title: 'Slots', gameCategory: 'slots', template: 1 },
        children: [
            {
                path: ':gameID',
                component: SubGamesMobileView,
                data: { showHeader: true, showFloats: false, showFooter: false },
                outlet: 'mobileSubGames'
            }
        ]
    },
    {
        path: 'live_casino',
        component: MainGamesMobileView,
        data: { title: 'Live Casino', gameCategory: 'casino', template: 3 }
    },
    {
        path: 'sports/:sportsName',
        component: GameFrameView,
        data: { title: '[sportsName]' },
    }  ,
    {
        path: 'gameAppSetPassword/:gameID',
        component: GameAppLoginView,
        data: { title: '[gameID]' },
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GamesRoutingMobileModule {
    static views = [SubGamesMobileView, MainGamesMobileView, GameAppLoginView];
}
