import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { AccountView } from '../../types/account-view';
import { BankInfo } from '../../types/bank-info';
import { PromotionInfo } from '../../types/promotion-view';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { minAmtValidator } from '../../../../../shared/validators/minAmt.validator';
import { requiredFileType } from '../../../../../shared/validators/upload-file.validator';
import { UserAction } from '../../account.constants';
import { RequestState } from '../../../../../shared/types/request-state';
@Component({
  selector: 'app-online-deposit-form',
  templateUrl: './online-deposit-form.container.html',
  styleUrls: ['./online-deposit-form.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnlineDepositFormContainer implements OnInit {
  isFormSubmitted: boolean = false;
  depositForm: FormGroup;
  strSiteAccountNo: string;
  strAccHolderName: string;
  @Input() accountView: AccountView;
  @Input() depositType: string;
  @Input() promoInfo: PromotionInfo;
  @Input() requestState: RequestState;
  @Output() onUserAction = new EventEmitter<{ action: UserAction, data: any }>();
  constructor(private currencyPipe: CurrencyPipe) { }

  ngOnInit() {
    this.createForm();
    if (this.promoInfo.IsDisableBonus) {
      this.depositForm.controls["promotion_id"].disable();
      this.depositForm.controls["promotion_id"].setValue(0);
    }
    this.setDepositType(this.depositType);
  }
  createForm() {
    this.depositForm = new FormGroup({
      deposit_amount: new FormControl(null, { validators: [Validators.required, minAmtValidator], updateOn: 'blur' }),
      bank_id: new FormControl(null, { validators: [Validators.required] }), //BankId
      ref_no: new FormControl(null, { validators: [Validators.required] }),//RefNo
      IsAcceptDepositTC: new FormControl(null, { validators: [Validators.required] }),
      promotion_id: new FormControl({ value: (this.promoInfo.IsDisableBonus ? 0 : null), disabled: this.promoInfo.IsDisableBonus }), //Bonus
      // FullName: new FormControl(null, { validators: [Validators.required] }),  //// Decimal and commas optional
      DepositType: new FormControl(null, { validators: [Validators.required] }),
      receipt: new FormControl(null, { validators: [Validators.required, requiredFileType('png,jpg')] }),//TransferReceipt
      SiteAccountNo: new FormControl(null, { validators: [Validators.required] }),
      deposit_method: new FormControl(null, { validators: [Validators.required] }), //DepositMethod
      bank_code: new FormControl(null, { validators: [Validators.required] })
    });

  }



  get deposit_amount() { return this.depositForm.get('deposit_amount'); }
  get bank_id() { return this.depositForm.get('bank_id'); }
  get ref_no() { return this.depositForm.get('ref_no'); }
  get IsAcceptDepositTC() { return this.depositForm.get('IsAcceptDepositTC'); }
  get promotion_id() { return this.depositForm.get('promotion_id'); }
  get DepositType() { return this.depositForm.get('DepositType'); }
  get SiteAccountNo() { return this.depositForm.get('SiteAccountNo'); }
  get receipt() { return this.depositForm.get('receipt'); }
  get deposit_method() { return this.depositForm.get('deposit_method'); }

  get bank_code() { return this.depositForm.get('bank_code'); }

  transformAmount(element) {
    let amt: any = parseFloat(this.deposit_amount.value).toFixed(2);
    if (isNaN(amt)) { amt = 0; }
    this.depositForm.controls['deposit_amount'].setValue(amt);
    element.target.value = this.currencyPipe.transform(amt, ' ');
  }
  setDepositType(strType: string) {
    this.depositForm.controls['DepositType'].setValue(strType);
  }

  onSubmitOnlineDeposit() {
    this.isFormSubmitted = true;


    if (this.depositForm.valid) {
      this.onUserAction.emit({ action: UserAction.OnlineDeposit, data: this.depositForm.value});
    }

    return;
  }
}
