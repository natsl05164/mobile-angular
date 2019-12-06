import { Injectable }           from '@angular/core';

import { LoginComponent } from '../../../../core/user/components/login/login.component';
 
import { DynamicContentItem }               from '../types/dynamic-content-item';

@Injectable()
export class DynamicContentService {
  getDynamicComponent() {
    return  [
      new DynamicContentItem(LoginComponent, {}),
       ]
  }
}

