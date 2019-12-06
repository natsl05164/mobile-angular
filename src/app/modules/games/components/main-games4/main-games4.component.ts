import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { GamesView } from '../../types/games-view';

import { BASE_MEDIA_URL } from '../../../../configs/app.constants';
import { trigger, transition, useAnimation } from '@angular/animations';
import { flipInY } from '../../../../animations';

const ANIMATION_TIMING = 1; //second

@Component({
  selector: 'app-main-games4',
  templateUrl: './main-games4.component.html',
  styleUrls: ['./main-games4.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [ 
     
      trigger('flipInY', [transition('0 => 1', useAnimation(flipInY, {
        // Set the duration to 1seconds and delay to 0seconds
        params: { timing: ANIMATION_TIMING, delay:0 }
      }))]),
    ]
})
export class MainGames4Component implements OnInit {
  @Input() gamesView: GamesView;
  BASE_MEDIA_URL = BASE_MEDIA_URL;

  count: number = 0;
  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

  onAnimationDone(e: AnimationEvent, idx: number) {
    if (this.count > (this.gamesView.Games.length - 2)) {

      setTimeout(() => {    
        this.count = 0;
        this.cdRef.detectChanges();
      }, (ANIMATION_TIMING+1)*1000);
      this.cdRef.detectChanges();
      return;
    }

    setTimeout(() => {     
      this.count++;
      this.cdRef.detectChanges();
    }, (ANIMATION_TIMING + 1) * 1000);

  }
}
