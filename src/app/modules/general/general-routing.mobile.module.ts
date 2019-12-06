import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeMobileView } from './home/views/home/home.mobile.view';

import { CurrencyPipe } from '@angular/common';
import { AccountMobileView } from './account/views/account/account.mobile.view';
import { TransferMobileView } from './account/views/transfer/transfer.mobile.view';
import { WithdrawMobileView } from './account/views/withdraw/withdraw.mobile.view';
import { HistoryMobileView } from './account/views/history/history.mobile.view';
import { DepositMobileView } from './account/views/deposit/deposit.mobile.view';

 

import { AuthGuard } from '../../core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeMobileView,
    data: { title: 'Home', showHeader: true, showFloats: true, showFooter: true }
  } ,
  {
    path: 'account',
    component: AccountMobileView,
    //canActivate: [AuthGuard],
    //canActivateChild: [AuthGuard],
    data: { title: 'Account', showHeader: true, showFloats: false, showFooter: false },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'transfer'
      },
      {
        path: 'transfer',
        component: TransferMobileView,
        data: { title: 'transfer', showHeader: true, showFloats: false, showFooter: false }
      },
      {
        path: 'withdrawal',
        component: WithdrawMobileView,
        data: { title: 'withdrawal', showHeader: true, showFloats: false, showFooter: false }
      },
      {
        path: 'history',
        component: HistoryMobileView,
        data: { title: 'History', showHeader: true, showFloats: false, showFooter: false }
      },
      {
        path: 'deposit',
        component: DepositMobileView,
        data: { title: 'deposit', showHeader: true, showFloats: false, showFooter: false }
      },
    ]
    },
    {
        path: '',
        redirectTo: '/home'
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CurrencyPipe]
})
export class GeneralRoutingMobileModule {

  static views = [HomeMobileView, AccountMobileView, TransferMobileView, WithdrawMobileView, HistoryMobileView, DepositMobileView ];
}
