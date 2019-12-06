import { NgModule } from '@angular/core';

import { ThemeModule } from '../../layout/theme.module';
import { ProfileComponent } from './components/profile/profile.component';
import { EditComponent } from './components/edit/edit.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
 

const BASE_MODULES_IMPORT = [ThemeModule];
const BASE_MODULES_EXPORT = [ThemeModule ];

const COMPONENTS = [ProfileComponent,
    EditComponent,
    ChangePasswordComponent ];
@NgModule({
    imports: [
        ...BASE_MODULES_IMPORT
    ],
    exports: [...BASE_MODULES_EXPORT, ...COMPONENTS],
    declarations: [
        ...COMPONENTS


    ]
})
export class ProfileCommonModule { }
