import { Component, OnInit ,Input, Output, EventEmitter } from '@angular/core';



//import { GamesService } from '../../../../core/http/games.service';
//import { AccountService } from '../../../../core/http/account.service';
//import { Observable } from 'rxjs';//Subscription

import { AllBalance } from '../../types/game-balance';
//import { AccountView } from '../../types/account-view';
import { UserAction } from '../../account.constants';
//import { minAmtValidator } from '../../../../shared/validators/minAmt.validator';
//import { AccountComm } from '../services/account.comm';
//import { Transfer } from '../../../../shared/models/transfer.interface';
import { Transfer } from '../../types/transfer';
import { RequestState } from '../../../../../shared/types/request-state';



@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {//, OnDestroy

  @Input() allBalance: AllBalance;
  @Input() requestState: RequestState;
  @Output() onUserAction = new EventEmitter<{ action: UserAction, data: any}>();
   
  //private subscriptions: Subscription = new Subscription();
  constructor(  ) {
    

  }

  ngOnInit() {
     //this.allBalance$ = this.accService.getAllGameBalances();
    //this.subscriptions.add(this.accComm.getGameBalanceLst().subscribe(d => {
    //   this.allBalance=d;
    //}));
     
  }

  onTransferToMainWallet(gameID, gameAmt) {

    let transfer: Transfer = {
      TransFrGameID: gameID,
      TransToGameID: 'main',
      TransAmount: gameAmt
    }

    this.onUserAction.emit({ action: UserAction.TransferToMainWallet, data: transfer });
    //this.balanceStore.transfer(transfer);
    //this.allBalance$ = this.accService.transfer(transfer);

  }

  onTransferFromMainWallet(gameID, gameAmt) {

    let transfer: Transfer = {
      TransFrGameID: 'main',
      TransToGameID: gameID,
      TransAmount: gameAmt
    }
    this.onUserAction.emit({ action: UserAction.TransferFromMainWallet, data: transfer });
    //this.allBalance$ = this.accService.transfer(transfer);
   // this.balanceStore.transfer(transfer);
  }

  refreshGameBalance() {
    //this.allBalance$ = this.accService.getAllGameBalances();
    //this.balanceStore.reloadBalanceInfo();
    this.onUserAction.emit({ action: UserAction.RefreshBalance, data: null });
  }

  //private isFormValid() {
  //  if (parseFloat(this.TransAmount.value) == 0) {
  //    //console.log("zeror");
  //    this.transferForm.controls['TransAmount'].setErrors({ 'zero': true });
  //    return false;
  //  }

  //  if (this.TransFrGameID.value && (this.TransFrGameID.value == this.TransToGameID.value)) {
  //   // console.log("zeror");
  //    this.transferForm.controls['TransToGameID'].setErrors({ 'transferToSame': true });
  //    return false;
  //  }


  //  return this.transferForm.valid;
  //}

  


  //ngOnDestroy(): void {
  //  this.subscriptions.unsubscribe();
  //}
}
//transfer_amount: 5050
//transfer_to: main
//transfer_from: ibc


//transfer_amount: 5053.000
//transfer_from: main
//transfer_to: cmd
