import { Component ,Input ,ChangeDetectionStrategy } from '@angular/core';

import { AccountView } from '../../types/account-view';

@Component({
  selector: 'app-deposit-mobile',
  templateUrl: './deposit.mobile.component.html',
  styleUrls: ['./deposit.mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DepositMobileComponent  {
  @Input() accountView: AccountView;
  depositType: string;

  constructor() { }
 

}
