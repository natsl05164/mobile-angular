import { Component, ChangeDetectionStrategy, Input} from '@angular/core';
import { Game } from '../../../../shared/types/game';
import { BASE_MEDIA_URL } from '../../../../configs/app.constants';
import { trigger,state,style, keyframes, animate, transition } from '@angular/animations';
import { slideInUp } from '../../../../animations';
@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush, 
  animations: [trigger('slideIn', [
    transition(':enter', [
      style({ transform: 'translateY(-100%)' }),
      animate('1500ms', style({ transform: 'translateY(0%)' }))
    ]),
    transition(':leave', [
      animate('1200ms', style({ transform: 'translateY(-100%)' }))
    ])
  ])]
})
export class GameDetailsComponent   {
  @Input()
  game: Game;
  BASE_MEDIA_URL =BASE_MEDIA_URL;

   

}
