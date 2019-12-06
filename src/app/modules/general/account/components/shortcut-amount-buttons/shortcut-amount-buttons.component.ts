import { Component, Output, EventEmitter } from '@angular/core';
import { APP_CONFIG } from '../../../../../configs/app.config';
@Component({
  selector: 'app-shortcut-amount-buttons',
  templateUrl: './shortcut-amount-buttons.component.html',
  styleUrls: ['./shortcut-amount-buttons.component.scss']
})
export class ShortcutAmountButtonsComponent   {

  @Output() onSelectAmount = new EventEmitter<number>();

  amounts:number[] = APP_CONFIG.depositAmounts;
  constructor() { }

  onClick(event,amount: number) {
    event.preventDefault();
    event.stopPropagation();
    this.onSelectAmount.emit(amount );
  }
}
