import { UserStore } from '../../../../core/user/services/user.store';
 
import { AppSettingsService } from '../../../../app-settings/services/app-settings.service';


import { UserAction } from '../../profile.constants';
//import { ApplicationStateService } from '../../../../../core/app-state/application-state.service';
export abstract class EditBase  {
  domain: string;
  constructor(public userStore: UserStore, private appSettingsSvc: AppSettingsService ) {

    //this.domain = appState.isMobile() ? appSettingsSvc.websiteData.MobileURL : appSettingsSvc.websiteData.WebURL;
    this.domain = this.appSettingsSvc.websiteData.WebURL; //TODO add country & language
    console.log(this.domain );
    // window.location.protocol + '//' + window.location.hostname;

  }

  ngOnInit() {
  }

  onUserAction(event) {
    if (event.action == UserAction.copyRefferalCode) {
      this.copyText();
    }
  }
  
  private copyText() {
  /* Get the text field */

    var elCopyText: HTMLInputElement = <HTMLInputElement>document.getElementById("elCopyText"); //TODO for app...
    elCopyText.focus();
    /* Select the text field */
    elCopyText.select();

    /* Copy the text inside the text field */
    try {
      let successful = document.execCommand('copy');
      let msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);
      alert("Copied to clipboard: " + elCopyText.value);
    } catch (err) {
      console.log('Oops, unable to copy');
    }

  }
}
