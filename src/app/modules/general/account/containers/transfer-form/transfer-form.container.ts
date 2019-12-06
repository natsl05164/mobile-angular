import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { ValidatorFn, FormGroup, FormControl, Validators } from '@angular/forms';
import { minAmtValidator } from '../../../../../shared/validators/minAmt.validator';
import { CurrencyPipe } from '@angular/common';
import { UserAction } from '../../account.constants';
import { GameType } from '../../../../../shared/types/game-type.interface';
//import { BalanceStore } from '../../services/balance.store';
 

const TransferGamesValidator: ValidatorFn = (fg: FormGroup) => {
  const TransFrGameID = fg.get('TransFrGameID').value;
  const TransToGameID = fg.get('TransToGameID').value;

  let result = true;

  if (TransFrGameID && TransToGameID && TransFrGameID == TransToGameID) {
    fg.get('TransToGameID').setErrors({ 'transferToSame': true });
    result = false;
  }
  else if (TransToGameID) {
    fg.get('TransToGameID').setErrors(null);

  }
  return result ? null : { transferToSame: true };
};

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.container.html',
  styleUrls: ['./transfer-form.container.scss']
})
export class TransferFormContainer implements OnInit {
  @Input() gameList: GameType[];
  @Output() onUserAction = new EventEmitter<{ action: UserAction, data: any }>();
  isFormSubmitted: boolean = false;
  transferForm: FormGroup;
  constructor(private currencyPipe: CurrencyPipe ) {

    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.transferForm = new FormGroup({
      TransFrGameID: new FormControl(null, { validators: [Validators.required] }),
      TransToGameID: new FormControl(null, { validators: [Validators.required] }),
      TransAmount: new FormControl(null, { validators: [Validators.required, Validators.pattern(/(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/), minAmtValidator] })  //// Decimal and commas optional
    }, { validators: TransferGamesValidator });

  }
  get TransFrGameID() { return this.transferForm.get('TransFrGameID'); }
  get TransToGameID() { return this.transferForm.get('TransToGameID'); }
  get TransAmount() { return this.transferForm.get('TransAmount'); }

  transformAmount(element) {
    let amt: any = parseFloat(this.TransAmount.value).toFixed(2);
    if (isNaN(amt)) { amt = 0; }
    this.transferForm.controls['TransAmount'].setValue(amt);
    element.target.value = this.currencyPipe.transform(amt, ' ');
  }

  onSubmitTransfer() {
    this.isFormSubmitted = true;
    // console.log(this.transferForm.value);

    if (this.transferForm.valid) {
      this.onUserAction.emit({ action: UserAction.Transfer, data: this.transferForm.value });
      //this.allBalance$ = this.accService.transfer(this.transferForm.value);
    }
  }







 
}
