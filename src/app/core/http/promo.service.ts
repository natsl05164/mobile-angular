import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PromoView } from '../../shared/models/promo-view.model';
import { APP_CONFIG } from '../../configs/app.config';
@Injectable({
  providedIn: 'root'
})
export class PromoService {

  constructor(private http: HttpClient) { }


  getPromoViewContent(): Observable<PromoView[]> {
    const href = `${APP_CONFIG.apiBaseUrl}/getPromoViewContent`;
    return this.http.get<PromoView[]>(href).pipe(map(d => {
      d = d['data'];
      d.sort((a, b) => a.Index < b.Index ? -1 : 1);
      d.forEach(item => {
      
        item.Content.Terms.sort((a, b) => a.Index < b.Index ? -1 : 1);
        item.Content.Offers.sort((a, b) => a.Index < b.Index ? -1 : 1); 
      });
      return d;
    }));
  }

}
