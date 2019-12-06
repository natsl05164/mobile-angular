import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { GeneralRoutingMobileModule } from './general-routing.mobile.module';

import { GeneralCommonModule } from './general.common.module';

import { LoginButtonsComponent } from './home/components/login-buttons/login-buttons.component';
import { NewGamesComponent } from './home/components/new-games/new-games.component';
import { ShortcutLinksComponent } from './home/components/shortcut-links/shortcut-links.component';
import { AccountMobileComponent } from './account/components/account.mobile/account.mobile.component';
import { HistoryResultsMobileComponent } from './account/components/history-results.mobile/history-results.mobile.component';
import { HistoryDetailsComponent } from './account/components/history-details/history-details.component';
import { DepositMobileComponent } from './account/components/deposit.mobile/deposit.mobile.component';
import { ShortcutAmountButtonsComponent } from './account/components/shortcut-amount-buttons/shortcut-amount-buttons.component';
@NgModule({
  imports: [
    GeneralRoutingMobileModule,
    GeneralCommonModule
  ],
  declarations: [
    GeneralRoutingMobileModule.views,
        LoginButtonsComponent,
    NewGamesComponent,
    ShortcutLinksComponent,
    AccountMobileComponent,
    HistoryResultsMobileComponent,
    HistoryDetailsComponent,
    DepositMobileComponent,
    ShortcutAmountButtonsComponent
  ]

})
export class GeneralMobileModule { }
