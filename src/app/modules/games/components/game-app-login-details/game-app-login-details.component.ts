import { Component, OnInit, Input,ChangeDetectionStrategy } from '@angular/core';
import { GameAppLoginDetails } from '../../types/game-app-login-detail';
@Component({
    selector: 'app-game-app-login-details',
    templateUrl: './game-app-login-details.component.html',
    styleUrls: ['./game-app-login-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameAppLoginDetailsComponent implements OnInit {
    @Input() appLoginDetails: GameAppLoginDetails = {} as GameAppLoginDetails;
    constructor() { }

    ngOnInit() {
       
    }

}
