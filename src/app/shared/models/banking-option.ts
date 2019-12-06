export interface BankingOption {
  Index:number,
  BankName: string,
  Status: string, 
  LogoClass:string,
  Deposit: BankingMethodDetails,
  Withdrawal: BankingMethodDetails
}


interface BankingMethodDetails {
  Method:string,
  Min: number,
  Max: number,
  ProcessingTime:string 
}
