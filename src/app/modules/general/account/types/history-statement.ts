import { GetPropertyName } from './get-property-name';
export class HistoryStatement extends GetPropertyName{
  TransDateTime: Date;
  TransID: number;
  TransType: string;
  Transaction: string;
  Status: string;
  Amount: number;
  Reason: string;
  Debit: number;
  Credit: number;
  Balance: number;
}
