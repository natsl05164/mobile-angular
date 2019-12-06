import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, AsyncValidatorFn } from '@angular/forms'
import { CurrencyPipe } from '@angular/common';
import { minAmtValidator } from '../../../../../shared/validators/minAmt.validator';
import { AccountView } from '../../types/account-view';
import { BankInfo, Bank } from '../../types/bank-info';
import { BalanceStore } from '../../services/balance.store';
import { UserAction } from '../../account.constants';
import {  Observable } from 'rxjs';
import { map} from 'rxjs/operators';
@Component({
  selector: 'app-withdraw-form',
  templateUrl: './withdraw-form.container.html',
  styleUrls: ['./withdraw-form.container.scss']
})
export class WithdrawFormContainer implements OnInit {
  @Input() accountView: AccountView;
  isFormSubmitted: boolean = false;
  withdrawForm: FormGroup;
  constructor(private balanceStore: BalanceStore, private currencyPipe: CurrencyPipe) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.withdrawForm = new FormGroup({
      WithDrawAmt: new FormControl(null, { validators: [Validators.required, minAmtValidator], asyncValidators: [this.validateWithDrawAmt()], updateOn: 'blur' }),
      BankID: new FormControl(null, { validators: [Validators.required] }),
      FullName: new FormControl(null, { validators: [Validators.required] }),  //// Decimal and commas optional
      WithdrawType: new FormControl(1, { validators: [Validators.required] }),
      AccountNo: new FormControl(null, { validators: [Validators.required] })
    });

  }

  get WithDrawAmt() { return this.withdrawForm.get('WithDrawAmt'); }
  get BankID() { return this.withdrawForm.get('BankID'); }
  get FullName() { return this.withdrawForm.get('FullName'); }
  get WithdrawType() { return this.withdrawForm.get('WithdrawType'); }
  get AccountNo() { return this.withdrawForm.get('AccountNo'); }


  validateWithDrawAmt(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.balanceStore.getNewWalletAmt().pipe(map(walletAmt => {
        //console.log("called");
        if (control.value > walletAmt) {

          return { exceedWalletAmt: true };
        }

        return null;
      }));
    }
  }

  transformAmount(element) {
    let amt: any = parseFloat(this.WithDrawAmt.value).toFixed(2);
    if (isNaN(amt)) { amt = 0; }
    this.withdrawForm.controls['WithDrawAmt'].setValue(amt);
    element.target.value = this.currencyPipe.transform(amt, ' ');
  }


  onSubmitWithdraw() {

    this.isFormSubmitted = true;
    if (this.WithdrawType.value == 1) {

      let strAccNo: string = this.accountView.UserBankInfo.filter(BankInfo => BankInfo.BankID == this.BankID.value)[0].AccountNo
      this.withdrawForm.controls['AccountNo'].setValue(strAccNo);
    }

    if (this.withdrawForm.valid) {
     // this.onUserAction.emit({ action: UserAction.Withdraw, data: this.withdrawForm.value });
      this.balanceStore.submitUserAction(this.withdrawForm.value, UserAction.Withdraw);
    }
    //  console.log(this.withdrawForm.value);

  }
}
