export enum UserAction {
  RefreshBalance,
  TransferToMainWallet,
  TransferFromMainWallet,
  Transfer,
  DirectDeposit,
  OnlineDeposit,
  Withdraw,
  GetHistory,
  OpenHistoryDetailsInModal
}


export enum TransactionType {
  Statement = 1,
  Deposit,
  WithDrawal,
  Betting,
  Transfer,
  Promotion
}

export enum TransactionStatus { 
  Failed="Failed",
  Success = "Success",
}



export enum PayGateWayType {
  PayTrust88 = 1,
  Eeziepay = 2,
}
