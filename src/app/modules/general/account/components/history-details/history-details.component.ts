import { Component, ChangeDetectionStrategy, Input    } from '@angular/core';
import { trigger, state, style, keyframes, animate, transition } from '@angular/animations';
import { slideInUp } from '../../../../../animations';
@Component({
  selector: 'app-history-details',
  templateUrl: './history-details.component.html',
  styleUrls: ['./history-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush, 
  animations: [trigger('slideIn', [
    transition(':enter', [
      style({ transform: 'translateY(-100%)' }),
      animate('1000ms ease-in', style({ transform: 'translateY(0%)' }))
    ]),
    transition(':leave', [
      animate('1000ms ease-out', style({ transform: 'translateY(-100%)' }))
    ])
  ])]
})
export class HistoryDetailsComponent   {
  
  private _historyDetail: [string,any][];

  @Input()
  set historyDetail(value: any)  {
    
    this._historyDetail = Object.keys(value).map(function (key) {
      return [key, value[key]];
    });
     
    //console.log(`title is changed to ${value}`);
  }

  get historyDetail(): any {
    return this._historyDetail;
  }
  constructor() {
    
  }

  
} 
