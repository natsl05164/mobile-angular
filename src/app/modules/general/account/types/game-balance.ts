import { GameType } from '../../../../shared/types/game-type.interface';

 interface GameBalance extends GameType {
  Balance: number;
}
export interface AllBalance  { //game-balance-list
  RewardPoints: number;
  TotalBalance: number;
  WalletAmt: number;
  FailedAmt: number; 
  GameBalList: Array<GameBalance>;
  
}
