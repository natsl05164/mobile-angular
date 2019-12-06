import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { MainNavMenu } from '../../types/main-nav-menu';
import { BASE_MEDIA_URL } from '../../../configs/app.constants'
import { GameType, UserAction } from '../../menu.constants'
 
@Component({
  selector: 'app-main-nav-mobile',
  templateUrl: './main-nav-mobile.component.html',
  styleUrls: ['./main-nav-mobile.component.scss']
})
export class MainNavMobileComponent implements OnInit {
  @Input() arrMenu: MainNavMenu[];
    //@Output() onOpenNavItem = new EventEmitter<boolean>();
    @Output() onUserAction = new EventEmitter<{ action: UserAction, data: {} }>();
  isOpenNavContent: boolean[]=[];
  BASE_MEDIA_URL: string = BASE_MEDIA_URL;
  MenuTitleCode = GameType;
  constructor() { }

  ngOnInit() {
  }

  openNavItem(idx: number) {
    
    this.isOpenNavContent = this.isOpenNavContent.map(e => { e = false; return false;});
    this.isOpenNavContent[idx] = true;
      //this.onOpenNavItem.emit();
      this.onUserAction.emit({ action: UserAction.OpenNavContent, data: this.isOpenNavContent[idx] });

  }

    openHistoryDetailsInModal(e, GameMenuItem) {
        e.stopPropagation();
        e.preventDefault();
        this.onUserAction.emit({ action: UserAction.ClickGameMenuItem, data: GameMenuItem });
    }
}
