import { Component, OnInit } from '@angular/core'; 
import { GeneralService } from '../../../../../core/http/general.service';
import { Observable } from 'rxjs';
import { WebsiteData } from '../../../../../shared/models/website-data.interface';
import { BankingOption } from '../../../../../shared/models/banking-option';
@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss']
})
export class BankingComponent implements OnInit {
  websiteData: WebsiteData = {} as WebsiteData;  //TODO
  bankingOptionLst$: Observable<BankingOption[]>;
  constructor(private generalSvc: GeneralService) { }

  ngOnInit() {

    this.websiteData.WebTitle = 'JACBET';
    this.websiteData.CurrenyCode = 'MYR';
    this.websiteData.CurrenyName = 'Malaysian Ringgit';
    this.bankingOptionLst$=this.generalSvc.getBankingOptions();
  }

}
