 
import { Component    } from '@angular/core';
import { EditBase } from './edit.base';
import { UserStore } from '../../../../core/user/services/user.store'; 

import { AppSettingsService } from '../../../../app-settings/services/app-settings.service';
@Component({ 
  templateUrl: './edit.view.html',
  styleUrls: ['./edit.view.scss']
})
export class EditView extends EditBase  {

  constructor(  userStore: UserStore,   appSettingsSvc: AppSettingsService) {

    super(userStore, appSettingsSvc);
  }

   

}
