import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
 
import { AccountView } from '../../types/account-view';


@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DepositComponent   {
 
  @Input() accountView: AccountView;
  depositType: string;
 
  constructor( ) {

  }
   


}
