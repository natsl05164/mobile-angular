import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppSettingsEndpoint } from './app-settings/services/app-settings.endpoint'; 
import { AppSettingsService } from './app-settings/services/app-settings.service';

export function loadWebsiteData(appSettingsService: AppSettingsService) {
    return () => appSettingsService.initWebsiteData().toPromise(); //TODO in case fails
}

@NgModule({
  providers: [AppSettingsEndpoint,AppSettingsService,
    {
      provide: APP_INITIALIZER,
      useFactory: loadWebsiteData,
      deps: [AppSettingsService],
      multi: true,
    },
  ],
})
export class AppInitializationModule { }
