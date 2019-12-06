
import { Component } from '@angular/core';
import { EditBase } from './edit.base';
import { UserStore } from '../../../../core/user/services/user.store';

import { AppSettingsService } from '../../../../app-settings/services/app-settings.service';
@Component({
  templateUrl: './edit.mobile.view.html',
  styleUrls: ['./edit.mobile.view.scss']
})
export class EditMobileView extends EditBase  {

  constructor(userStore: UserStore, appSettingsSvc: AppSettingsService) {

    super(userStore, appSettingsSvc);
  }

  
}
