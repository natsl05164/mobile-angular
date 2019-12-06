import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
//import { MainNavMenu } from '../../shared/models/main-menu.interface';
import { BankingOption } from '../../shared/models/banking-option';
//import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  //baseUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { 
  }

  //getMainMenuItems(): Observable<MainNavMenu[]> { //all-slots page
  //  const href = '/api/getMainMenuItems';
  //  return this.http.get<MainNavMenu[]>(href);
  //}

  getBankingOptions(): Observable<BankingOption[]> { //all-slots page
    const href = '/api/getBankingOptions';
    return this.http.get<BankingOption[]>(href);
  }
}
