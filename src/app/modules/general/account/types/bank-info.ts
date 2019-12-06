export interface Bank {
  BankID?: number,
  BankName: string,
  BankCode:string
}


export interface BankInfo extends Bank{
 
  AccountNo: string;
  AccHolderName: string;

}



