import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
  

import { Transfer } from '../../types/transfer';
import { RequestState } from '../../../../../shared/types/request-state';

import { AllBalance } from '../../types/game-balance';
import { UserAction } from '../../account.constants';
@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.scss']
})
export class WithdrawalComponent implements OnInit {

  @Input() allBalance: AllBalance; 
  @Input() requestState: RequestState;
  @Output() onUserAction = new EventEmitter<{ action: UserAction, data: any }>();


  //bankInfo$: Observable<Array<BankInfo>>;
  //bankLst$: Observable<Array<Bank>>;
 

  //allBalance$: Observable<AllBalance>;
  //private lstBankInfo: Array<BankInfo>;
  constructor( ) {
    
  }

  

  ngOnInit() {
    //this.bankInfo$ = this.accService.getAllBanksByUser().pipe(
    //  tap(
    //    data =>
    //    {
    //    this.lstBankInfo = data; //console.log(this.lstBankInfo);
    //    }
    //  ));
    //this.bankLst$ = this.accService.getAllBanksList();

    //this.allBalance$ = this.accService.getAllGameBalances();
  }


  //onSubmitWithdraw() {
  

  //  if (this.WithdrawType.value == 1) { 

  //     let strAccNo: string = this.lstBankInfo.filter(BankInfo => BankInfo.BankID == this.BankID.value)[0].AccountNo
  //     this.withdrawForm.controls['AccountNo'].setValue(strAccNo);
  //  }
  ////  console.log(this.withdrawForm.value);
   
  //}
 
 



  refreshGameBalance() {
    //this.allBalance$ = this.accService.getAllGameBalances();
    this.onUserAction.emit({ action: UserAction.RefreshBalance, data: null });
  }

  onTransferToMainWallet(gameID, gameAmt) {

    let transfer: Transfer = {
      TransFrGameID: gameID,
      TransToGameID: 'main',
      TransAmount: gameAmt
    }
    //this.allBalance$ = this.accService.transfer(transfer);
    this.onUserAction.emit({ action: UserAction.TransferToMainWallet, data: transfer });
  }

 
}
