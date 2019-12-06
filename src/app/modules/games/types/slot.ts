import { Game  } from '../../../shared/types/game';
export interface Slot extends Game {
  //Name: string;
  JPAmount: number; //JackPot amount
  //ImgSrc: string;//TODO shud be URL 
  // PlayLink: string;
  //TryLink: string;
  IsHide?: Boolean;
  IsNew?: Boolean;
  IsFeatured?: Boolean;
  IsTop?: Boolean;
  IsProgJP?: Boolean;
  IsSlots?: Boolean;
  FlexGrow: number;
}
