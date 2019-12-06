 
export interface DirectDeposit {
  deposit_amount: number,
  bank_id: number,
  ref_no: string,
  IsAcceptDepositTC: boolean,
  promotion_id: number,
  DepositType: string,
  SiteAccountNo: string,
  receipt: File,
  deposit_method:number
}
