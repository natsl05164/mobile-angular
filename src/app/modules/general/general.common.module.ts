import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module'; /*TODO*/

 
import { HomeInfoComponent } from './home/components/home-info/home-info.component';

//history page
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';





import { PromoComponent } from './promo/promo.component';
import { InfoComponent } from './info/info.component';
import { FaqComponent } from './info/faq/faq.component';
import { GeneralComponent } from './info/faq/general/general.component';
import { ReferralComponent } from './referral/referral.component';
import { GamesComponent } from './info/faq/games/games.component';
import { FaqDepositComponent } from './info/faq/deposit/deposit.component';
import { TechnicalComponent } from './info/faq/technical/technical.component';
import { FaqWithdrawalComponent } from './info/faq/faq-withdrawal/faq-withdrawal.component';
import { BankingComponent } from './info/faq/banking/banking.component';
import { AffiliatesComponent } from './info/faq/affiliates/affiliates.component';
import { TermsConditionsComponent } from './info/terms-conditions/terms-conditions.component';
import { TermsComponent } from './info/terms-conditions/terms/terms.component';




import { ThemeModule } from '../../layout/theme.module';

import { TransferComponent } from './account/components/transfer/transfer.component';
import { DepositComponent } from './account/components/deposit/deposit.component';
import { WithdrawalComponent } from './account/components/withdrawal/withdrawal.component';
import { HistoryComponent } from './account/components/history/history.component';


import { DirectDepositFormContainer } from './account/containers/direct-deposit-form/direct-deposit-form.container';
import { OnlineDepositFormContainer } from './account/containers/online-deposit-form/online-deposit-form.container';
import { TransferFormContainer } from './account/containers/transfer-form/transfer-form.container';
import { WithdrawFormContainer } from './account/containers/withdraw-form/withdraw-form.container';


import { MatExpansionModule } from '@angular/material/expansion';

const BASE_MODULES_IMPORT = [ThemeModule,
    MatExpansionModule,
  NgxDaterangepickerMd.forRoot(),
  SharedModule];
const BASE_MODULES_EXPORT = [ThemeModule,
    MatExpansionModule,
  NgxDaterangepickerMd,
  SharedModule];

const COMPONENTS = [HomeInfoComponent,
 
  PromoComponent,
  InfoComponent,
  FaqComponent,
  GeneralComponent,
  ReferralComponent,
  GamesComponent,
  FaqDepositComponent,
  TechnicalComponent,
  FaqWithdrawalComponent,
  BankingComponent,
  AffiliatesComponent,
  TermsConditionsComponent,
  TermsComponent,

  TransferComponent,
  DepositComponent,
  WithdrawalComponent,
  HistoryComponent,
  DirectDepositFormContainer,
  OnlineDepositFormContainer,
  TransferFormContainer,
  WithdrawFormContainer, ];
@NgModule({
  imports: [ 
    ...BASE_MODULES_IMPORT
  ],
  exports: [...BASE_MODULES_EXPORT, ...COMPONENTS],
  declarations: [
    ...COMPONENTS


  ]

})
export class GeneralCommonModule { }
