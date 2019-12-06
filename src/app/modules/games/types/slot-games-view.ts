
import { Slot } from './slot';

class SlotRow {
  Slots: Array<Slot>;
}

interface GameCategory {
  Name: string,
  FilterProperty: string
}



export interface SlotGamesView {
  Title: string;
  Description: string;
  BannerSrc: string;
  SlotRows: Array<SlotRow>;
  GameCategories: Array<GameCategory>;//New, featured etc
  //Slots:;
  
}
