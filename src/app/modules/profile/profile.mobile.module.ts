import { NgModule } from '@angular/core'; 

 

import { ProfileCommonModule } from './profile.common.module';
import { ProfileRoutingMobileModule } from './profile-routing.mobile.module';

@NgModule({
    declarations: [ProfileRoutingMobileModule.views],//
    imports: [
        ProfileCommonModule,
        ProfileRoutingMobileModule
    ]
})
export class ProfileMobileModule { }
