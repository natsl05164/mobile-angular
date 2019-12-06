import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PromoService } from '../../../core/http/promo.service';
import { PromoView } from '../../../shared/models/promo-view.model';
import { BASE_MEDIA_URL } from '../../../configs/app.constants';
@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent implements OnInit {

  BASE_MEDIA_URL: string = BASE_MEDIA_URL; 
  promoLst$: Observable<PromoView[]>; 
  constructor(private promoSvc: PromoService) { }

  ngOnInit() {

    this.promoLst$= this.promoSvc.getPromoViewContent();
  }

}
