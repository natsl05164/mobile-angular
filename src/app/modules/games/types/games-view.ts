
import { Game } from '../../../shared/types/game';
 

export interface GamesView {
  Title: string;
  Description: string;
  BannerSrc: string;
  Games: Game[];
  
}



export interface GameView {
    Title: string;
    Description: string;
    BannerSrc: string;
    GameUrlSrc: string;
    DemoUrlSrc: string;
    IsDisabled?: boolean;//disabled no nid to send Url src
}
