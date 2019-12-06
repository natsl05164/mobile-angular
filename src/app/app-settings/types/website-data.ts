import { SocialHandles } from '../../shared/types/social-handles';

export interface WebsiteData { 
  WebTitle: string;
  WebsiteLogo: string;// '/assets/images/logo/client-1/logo.png',
  MobileLogo: string;
  CurrenyCode: string;
  CurrenyName: string;
  Country: string;
  LiveChatCode: string;
  SocialHandles: SocialHandles;
  MobileURL: string;
  WebURL: string; 
  //SocialHandles TODO 
}
