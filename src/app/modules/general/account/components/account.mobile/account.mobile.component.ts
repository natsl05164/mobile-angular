 
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { AllBalance } from '../../types/game-balance';
import { UserAction } from '../../account.constants';
  
@Component({
  selector: 'app-account-mobile',
  templateUrl: './account.mobile.component.html',
  styleUrls: ['./account.mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountMobileComponent {
  @Input() allBalance: AllBalance;

  @Output() onUserAction = new EventEmitter<UserAction>();
  UserAction = UserAction;

  constructor() { }

}
