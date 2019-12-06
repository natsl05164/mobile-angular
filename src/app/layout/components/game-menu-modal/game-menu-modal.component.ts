import { Component, OnInit, Input ,ChangeDetectionStrategy} from '@angular/core';
import { GameModalParam, GameBrowserLaunchBtn } from '../../types/game-modal';
import { GameModalMenuService } from '../../services/game-modal-menu.service';
@Component({
  selector: 'app-game-menu-modal',
  templateUrl: './game-menu-modal.component.html',
    styleUrls: ['./game-menu-modal.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameMenuModalComponent implements OnInit {
    @Input() gameModalParam = {} as GameModalParam;
    gameModalView  = [];
    appLaunchImgSrc: string = "";
    constructor(private gameModalMenuService: GameModalMenuService) {
        
     
    }

    ngOnInit() {
        
        let _gameModalView = this.gameModalMenuService.getModal(this.gameModalParam.MenuTitleCode, this.gameModalParam.GameID);
        this.appLaunchImgSrc = this.gameModalMenuService.AppLaunchImgSrc;
        let i, j, m = 0, chunk = 2;
        for (i = 0, j = _gameModalView.length; i < j; i += chunk) {
            this.gameModalView[m] = _gameModalView.slice(i, i + chunk);
            ++m;
            // do whatever
        }
  }

}
