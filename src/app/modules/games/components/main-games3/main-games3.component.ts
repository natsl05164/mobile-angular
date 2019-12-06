import { Component, Input,ChangeDetectorRef, ChangeDetectionStrategy,OnInit } from '@angular/core';
import { GamesView } from '../../types/games-view';

import { BASE_MEDIA_URL, BASE_MEDIA_URL_MOBILE } from '../../../../configs/app.constants';
@Component({
  selector: 'app-main-games3',
  templateUrl: './main-games3.component.html',
  styleUrls: ['./main-games3.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainGames3Component  {
  BASE_MEDIA_URL: string  ;//TODO to make constant service
  @Input() isMobile: boolean;
  @Input() gamesView: GamesView;
  constructor() {
   
  }


  ngOnInit() {
    this.BASE_MEDIA_URL = this.isMobile ? BASE_MEDIA_URL : BASE_MEDIA_URL;
  }
}
