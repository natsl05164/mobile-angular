import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // for gameapploginview, TODO make a new module for it
import { GamesRoutingMobileModule } from './games-routing.mobile.module';
import { GamesCommonModule } from './games.common.module';
import { AllSlotsMobileComponent } from './components/all-slots-mobile/all-slots-mobile.component';
import { MainGames1MobileComponent } from './components/main-games1-mobile/main-games1-mobile.component';
import { MainGames4Component } from './components/main-games4/main-games4.component';
import { GameAppSetPwdFormContainer } from './containers/game-app-set-pwd-form/game-app-set-pwd-form.container';
import { GameAppDownloadComponent } from './components/game-app-download/game-app-download.component';
import { GameAppGuideComponent } from './components/game-app-guide/game-app-guide.component';
import { GameAppLoginDetailsComponent } from './components/game-app-login-details/game-app-login-details.component';


@NgModule({
    imports: [
        GamesRoutingMobileModule,
        GamesCommonModule,
        FormsModule, ReactiveFormsModule
    ],
    declarations: [
        MainGames1MobileComponent,
        AllSlotsMobileComponent,
        GamesRoutingMobileModule.views,
        MainGames4Component,
        GameAppSetPwdFormContainer,
        GameAppDownloadComponent,
        GameAppGuideComponent,
        GameAppLoginDetailsComponent,
 
    ]
})
export class GamesMobileModule {

}
