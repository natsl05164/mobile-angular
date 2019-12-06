import { BankInfo, Bank } from '../types/bank-info';
import { GameType } from '../../../../shared/types/game-type.interface';
export interface AccountView {
  GameList: GameType[],
  UserBankInfo: BankInfo[] ;
  SiteBankList: BankInfo[];
  AllBankList: Bank[];
  IsEnablePayTrust88: boolean;
  IsEnableEeziePay: boolean;
  PayTrust88BankLst: Bank[]; //if IsEnablePayTrust88 false, this is null -TODO REMOVE to put in another ajax call
  EezieBankLst: Bank[]; //if IsEnableEeziePay false, this is null -TODO  REMOVE to put in another ajax call

}
