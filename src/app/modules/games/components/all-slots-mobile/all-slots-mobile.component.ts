import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';
import { BASE_MEDIA_URL } from '../../../../configs/app.constants';
import { SlotGamesView } from '../../types/slot-games-view';
import { UserAction } from '../../games.constants';

import GamesUtils from '../../helpers/games.utils';
@Component({
  selector: 'app-all-slots-mobile',
  templateUrl: './all-slots-mobile.component.html',
  styleUrls: ['./all-slots-mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllSlotsMobileComponent implements OnInit {

  @Input() slotGamesView: SlotGamesView;
  @Output() onUserAction = new EventEmitter<{ action: UserAction, data: any }>(); 
  private _filterProperty: string = '';
  get filterProperty(): string {
    return this._filterProperty;
  }
  set filterProperty(value: string) {
    this._filterProperty = value;
  } 

  BASE_MEDIA_URL: string = BASE_MEDIA_URL;
  constructor() { }

  ngOnInit() {
  }

  filterSlot(slot, filterProperty) {
 
    return GamesUtils.filterSlot(slot, filterProperty);
  }

  showGameLinks(e, objGame:Object) {
    e.stopPropagation();
    e.preventDefault();
    this.onUserAction.emit({ action: UserAction.ShowGameLinks, data: objGame });

  }
}
