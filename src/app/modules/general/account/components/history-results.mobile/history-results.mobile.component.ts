
import { Component, OnInit, ViewChild, Input, ChangeDetectionStrategy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { History } from '../../types/history';

import { TransactionType, TransactionStatus, UserAction } from '../../account.constants';
import { HistoryBetting } from '../../types/history-betting';
import { HistoryDeposit } from '../../types/history-deposit';
import { HistoryPromotion } from '../../types/history-promotion';
import { HistoryTransfer } from '../../types/history-transfer';
import { HistoryStatement } from '../../types/history-statement';
import { HistoryWithdraw } from '../../types/history-withdraw';

import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-history-results-mobile',
  templateUrl: './history-results.mobile.component.html',
  styleUrls: ['./history-results.mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryResultsMobileComponent implements OnInit {
  @Input() history: History;
  @Output() onUserAction = new EventEmitter<{ action: UserAction, data: any }>();

  bettingHistory: HistoryBetting[];
  transferHistory: HistoryTransfer[];
  statementHistory: HistoryStatement[];
  promotionHistory: HistoryPromotion[];
  depositHistory: HistoryDeposit[];
  withdrawHistory: HistoryWithdraw[];
  totalBalance: number;
  totalCredit: number;
  totalDebit: number;
  totalAmt: number;
  totalBetAmt: number;
  totalTurnover: number;
  totalWinLose: number;

  TransactionStatus = TransactionStatus;
  TransactionType = TransactionType;

  private onKeyUp$: Subject<string> = new Subject();


  constructor() { }

  ngOnInit() {
    this.onKeyUp$.pipe(debounceTime(500)).subscribe(searchTextValue => {
      this.filterItem(searchTextValue);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.totalBalance = null;
    this.totalCredit = null;
    this.totalDebit = null;
    this.totalAmt = null;
    this.totalBetAmt = null;
    this.totalTurnover = null;
    this.totalWinLose = null;

    this.bettingHistory = null;
    this.transferHistory = null;
    this.depositHistory = null;
    this.statementHistory = null;
    this.promotionHistory = null;
    this.withdrawHistory = null;

    if (!this.history) {
      return;
    }


    if (this.history.transactionType == TransactionType.Betting) {
      this.bettingHistory = [];
      this.assignCopy(<HistoryBetting[]>this.history.historyLst, this.bettingHistory);
      const obj = new HistoryBetting();
      this.totalBetAmt = this.getTotal(obj.GetPropertyName('BetAmount'));
      this.totalTurnover = this.getTotal(obj.GetPropertyName('Turnover'));
      this.totalWinLose = this.getTotal(obj.GetPropertyName('TotalWinLoss'));
    }

    if (this.history.transactionType == TransactionType.Transfer) {
      this.transferHistory = [];
      this.assignCopy(<HistoryBetting[]>this.history.historyLst, this.transferHistory);
      const obj = new HistoryTransfer();
      this.totalAmt = this.getTotal(obj.GetPropertyName('Amount'));
    }
    if (this.history.transactionType == TransactionType.Deposit) {
      this.depositHistory = [];
      this.assignCopy(<HistoryBetting[]>this.history.historyLst, this.depositHistory);
      const obj = new HistoryDeposit();
      this.totalAmt = this.getTotal(obj.GetPropertyName('Amount'));
    }
    if (this.history.transactionType == TransactionType.Statement) {
      this.statementHistory = [];
      this.assignCopy(<HistoryBetting[]>this.history.historyLst, this.statementHistory);
      const obj = new HistoryStatement();
      this.totalBalance = this.getTotal(obj.GetPropertyName('Balance'));
      this.totalCredit = this.getTotal(obj.GetPropertyName('Credit'));
      this.totalDebit = this.getTotal(obj.GetPropertyName('Debit'));
    }
    if (this.history.transactionType == TransactionType.Promotion) {
      this.promotionHistory = [];
      this.assignCopy(<HistoryBetting[]>this.history.historyLst, this.promotionHistory);
      const obj = new HistoryPromotion();
      this.totalAmt = this.getTotal(obj.GetPropertyName('Amount'));
    }
    if (this.history.transactionType == TransactionType.WithDrawal) {
      this.withdrawHistory = [];
      this.assignCopy(<HistoryBetting[]>this.history.historyLst, this.withdrawHistory);
      const obj = new HistoryWithdraw();
      this.totalAmt = this.getTotal(obj.GetPropertyName('Amount'));
    }



  }


  private getTotal(strPropName) { 


    return this.history.historyLst.map(t => // if status is success only add
    {
      if ((t.hasOwnProperty('Status') && t['Status'] === TransactionStatus.Success) || !t.hasOwnProperty('Status')) {
        return t[strPropName];
      }
      else { return 0;}
    }).reduce(
      (acc, value) =>
      acc + value, 0);
  }
 


  private assignCopy(copyFrom: any[], assignTo: any[]) {
    Object.assign(assignTo, copyFrom);
  }

  onKeyUp(searchTextValue: string) {
    this.onKeyUp$.next(searchTextValue);
  }

  private filterItem(value) {

    if (this.history.transactionType == TransactionType.Betting) {
      if (!value) {
        this.assignCopy(this.history.historyLst, this.bettingHistory);
      } // when nothing has typed

      this.bettingHistory = (Object.assign([], this.history.historyLst).filter(
        item => JSON.stringify(item).toLowerCase().indexOf(value.toLowerCase()) > -1
      ));
    }

    if (this.history.transactionType == TransactionType.Transfer) {
      if (!value) {
        this.assignCopy(this.history.historyLst, this.transferHistory);
      } // when nothing has typed

      this.transferHistory = (Object.assign([], this.history.historyLst).filter(
        item => JSON.stringify(item).toLowerCase().indexOf(value.toLowerCase()) > -1
      ));
    }
    if (this.history.transactionType == TransactionType.Deposit) {
      if (!value) {
        this.assignCopy(this.history.historyLst, this.depositHistory);
      } // when nothing has typed

      this.depositHistory = (Object.assign([], this.history.historyLst).filter(
        item => JSON.stringify(item).toLowerCase().indexOf(value.toLowerCase()) > -1
      ));
    }
    if (this.history.transactionType == TransactionType.Statement) {
      if (!value) {
        this.assignCopy(this.history.historyLst, this.statementHistory);
      } // when nothing has typed

      this.statementHistory = (Object.assign([], this.history.historyLst).filter(
        item => JSON.stringify(item).toLowerCase().indexOf(value.toLowerCase()) > -1
      ));
    }
    if (this.history.transactionType == TransactionType.Promotion) {
      if (!value) {
        this.assignCopy(this.history.historyLst, this.promotionHistory);
      } // when nothing has typed

      this.promotionHistory = (Object.assign([], this.history.historyLst).filter(
        item => JSON.stringify(item).toLowerCase().indexOf(value.toLowerCase()) > -1
      ));
    }
    if (this.history.transactionType == TransactionType.WithDrawal) {

      if (!value) {
        this.assignCopy(this.history.historyLst, this.withdrawHistory);
      } // when nothing has typed

      this.withdrawHistory = (Object.assign([], this.history.historyLst).filter(
        item => JSON.stringify(item).toLowerCase().indexOf(value.toLowerCase()) > -1
      ));
    }
  }

  openHistoryDetailsInModal(e, historyDetail) {
    e.stopPropagation();
    e.preventDefault();
    this.onUserAction.emit({ action: UserAction.OpenHistoryDetailsInModal, data: historyDetail });
  }
}
