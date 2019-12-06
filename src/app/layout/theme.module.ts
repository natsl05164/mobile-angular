import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { MainCarouselComponent } from '../shared/components/main-carousel/main-carousel.component';
 
 

import { LayoutContainer } from '../layout/containers/layout/layout.container';
import { TopBarComponent } from '../layout/components/top-bar/top-bar.component';
import { FooterComponent } from '../layout/components/footer/footer.component';
import { MainNavComponent } from '../layout/components/main-nav/main-nav.component';
import { FloatsComponent } from '../layout/components/floats/floats.component';



import { SharedModule } from '../shared/shared.module'; //shared used in layout
import { LivechatWidgetModule } from '@livechat/angular-widget';

//import { AlertComponent } from '../shared/components/alert/alert.component';


import { PopoverModule } from 'ngx-bootstrap/popover';
//import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
 
import { SpinnerComponent } from './../shared/components/spinner/spinner.component';
import { VarDirective } from './../shared/directives/var.directive';
import { TopBarMobileComponent } from './components/top-bar-mobile/top-bar-mobile.component';
import { MainNavMobileComponent } from './components/main-nav-mobile/main-nav-mobile.component';

//Material theme
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { GameMenuModalComponent } from './components/game-menu-modal/game-menu-modal.component';
const BASE_MODULES = [CommonModule, RouterModule, FormsModule, ReactiveFormsModule ]; //TODO these are exported 
const COMPONENTS = [
  //MainCarouselComponent, 
  TopBarComponent,
  FooterComponent,
  MainNavComponent, 
  FloatsComponent,
  LayoutContainer, 
  //AlertComponent
    SpinnerComponent,
    GameMenuModalComponent
];

const PIPES = [
  VarDirective
];

const NG_MODULES_import = [

  //theme modules --Not sure which not use in Layout
  //CarouselModule.forRoot(),
  PopoverModule.forRoot(),
 // PaginationModule.forRoot(),
  TooltipModule.forRoot(),
  ModalModule.forRoot(),
  BsDatepickerModule.forRoot(),
 
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  //shared used in layout
    SharedModule,

    LivechatWidgetModule
];
const NG_MODULES_export = [
   //theme modules
  //CarouselModule,
  PopoverModule,
  //PaginationModule,
  TooltipModule,
  ModalModule,
    BsDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
];
@NgModule({

  imports: [
    ...BASE_MODULES, ...NG_MODULES_import
  ],
  exports: [...BASE_MODULES,...NG_MODULES_export, ...COMPONENTS, ...PIPES],
  declarations: [...COMPONENTS, ...PIPES, TopBarMobileComponent, MainNavMobileComponent],
  entryComponents: []

})
export class ThemeModule {
  //static forRoot(): ModuleWithProviders {
  //  return <ModuleWithProviders>{
  //    ngModule: ThemeModule,
  //    providers: [...NB_THEME_PROVIDERS],
  //  };
  //}
  constructor(
    //@Optional()
    //@SkipSelf()
    //parentModule: ThemeModule
  ) {
    //if (parentModule) {
    //  throw new Error(
    //    'ThemeModule is already loaded. Import it in the AppModule only.'
    //  );
    //}
  }
}
