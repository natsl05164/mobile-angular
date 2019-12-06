import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeDesktopView } from './home/views/home/home.desktop.view';

import { CurrencyPipe } from '@angular/common';


import { AuthGuard } from '../../core/guards/auth.guard';


import { PromoComponent } from './promo/promo.component';
import { ReferralComponent } from './referral/referral.component';
import { InfoComponent } from './info/info.component';
import { FaqComponent } from './info/faq/faq.component';
import { GeneralComponent } from './info/faq/general/general.component';
import { GamesComponent } from './info/faq/games/games.component';
import { FaqDepositComponent } from './info/faq/deposit/deposit.component';
import { FaqWithdrawalComponent } from './info/faq/faq-withdrawal/faq-withdrawal.component';
import { TechnicalComponent } from './info/faq/technical/technical.component';
import { BankingComponent } from './info/faq/banking/banking.component';
import { TermsConditionsComponent } from './info/terms-conditions/terms-conditions.component';
import { TermsComponent } from './info/terms-conditions/terms/terms.component';

import { AccountView } from './account/views/account/account.view';
import { TransferView } from './account/views/transfer/transfer.view';
import { DepositView } from './account/views/deposit/deposit.view';
import { WithdrawView } from './account/views/withdraw/withdraw.view';
import { HistoryView } from './account/views/history/history.view';
 

const routes: Routes = [
  {
    path: 'home',
    component: HomeDesktopView,
    data: { title: 'Home', showHeader: true, showFloats: true, showFooter: true }
  },
  
  {
    path: 'account',
    component: AccountView,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    data: { title: 'Account', showHeader: true, showFloats: false, showFooter: false },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'transfer'
      },
      { 
        path: 'transfer',
        component: TransferView, 
        data: { title: 'transfer', showHeader: true, showFloats: false, showFooter: false }
      },
      {
        path: 'deposit',
        component: DepositView,
        data: { title: 'deposit', showHeader: true, showFloats: false, showFooter: false }
      },
      {
        path: 'withdrawal',
        component: WithdrawView,
        data: { title: 'withdrawal', showHeader: true, showFloats: false, showFooter: false }
      },
      {
        path: 'history',
        component: HistoryView,
        data: { title: 'history', showHeader: true, showFloats: false, showFooter: false }
      }
    ]
  },
  {
    path: 'promotion',
    component: PromoComponent,
    data: { title: 'Promotion', showHeader: true, showFloats: true, showFooter: true }
  },
  {
    path: 'info',
    component: InfoComponent,
    data: { title: 'Info', showHeader: true, showFloats: false, showFooter: false },
    children: [{
      path: 'faq',
      component: FaqComponent,
      data: { title: 'FAQ', showHeader: true, showFloats: false, showFooter: false },
      children: [
        {
          path: 'general',
          component: GeneralComponent,
          data: { title: 'FAQ', showHeader: true, showFloats: false, showFooter: false }
        },
        {
          path: 'games',
          component: GamesComponent,
          data: { title: 'FAQ', showHeader: true, showFloats: false, showFooter: false }
        },
        {
          path: 'deposit',
          component: FaqDepositComponent,
          data: { title: 'FAQ', showHeader: true, showFloats: false, showFooter: false }
        },
        {
          path: 'withdrawal',
          component: FaqWithdrawalComponent,
          data: { title: 'FAQ', showHeader: true, showFloats: false, showFooter: false }
        },
        {
          path: 'technical',
          component: TechnicalComponent,
          data: { title: 'FAQ', showHeader: true, showFloats: false, showFooter: false }
        },
        {
          path: 'banking',
          component: BankingComponent,
          data: { title: 'FAQ', showHeader: true, showFloats: false, showFooter: false }
        }]
    },
    {
      path: 'termsconditions',
      component: TermsConditionsComponent,
      data: { title: 'Terms & Conditions', showHeader: true, showFloats: true, showFooter: true },
      children: [{ 
        path: 'terms',
        component: TermsComponent,
        data: { title: 'Terms & Conditions', showHeader: true, showFloats: false, showFooter: false }
      }]
    }]
  },

  {
    path: 'referral',
    component: ReferralComponent,
    data: { title: 'Referral', showHeader: true, showFloats: true, showFooter: true }
  },
  {
    path: '',
    redirectTo: 'home'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CurrencyPipe]
})
export class GeneralRoutingModule {

  static views = [HomeDesktopView, AccountView, TransferView, DepositView, WithdrawView, HistoryView ]; 
}
