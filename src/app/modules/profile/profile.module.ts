import { NgModule } from '@angular/core'; 


import { ProfileCommonModule } from './profile.common.module';
import { ProfileRoutingModule } from './profile-routing.module'; 

@NgModule({
    declarations: [ProfileRoutingModule.views],//
    imports: [
        ProfileCommonModule,
        ProfileRoutingModule
    ]
})
export class ProfileModule { }
