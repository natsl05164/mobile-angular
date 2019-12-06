import { OrderedList } from './ordered-list.interface';



interface PromoContent {
  Offers: OrderedList[];
  Terms: OrderedList[];

}




export class PromoView {
  Title: string;
  ImgSrc: string;
  Content: PromoContent;
  Index: number;
}
