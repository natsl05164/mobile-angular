import { Component,  Input,Output,EventEmitter,ChangeDetectionStrategy} from '@angular/core'; 
import { AllBalance } from '../../types/game-balance';
import { UserAction } from '../../account.constants';
 
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountComponent {
  @Input() allBalance: AllBalance;

  @Output() onUserAction = new EventEmitter<UserAction>();
  UserAction= UserAction; 
 
  constructor() { }
  
}
