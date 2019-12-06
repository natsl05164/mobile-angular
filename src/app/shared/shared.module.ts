import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContentPaginationComponent } from '../shared/components/content-pagination/content-pagination.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { FileUploadComponent } from './components/file-upload/file-upload.component';

//import { SpinnerComponent } from './components/spinner/spinner.component';
import { EllipsisComponent } from './components/ellipsis/ellipsis.component';
 
import { MainCarouselComponent } from './components/main-carousel/main-carousel.component';
import { SafePipe } from './pipes/safe.pipe';
import { CallbackPipe } from './../shared/pipes/callback.pipe';
import { EnumToArrayPipe } from './../shared/pipes/enum-to-array.pipe';

import { DynamicContentOutletComponent } from './components/dynamic-content-outlet/dynamic-content-outlet.component';
import { DynamicContentService } from './components/dynamic-content-outlet/services/dynamic-content.service';
import { DynamicOutletRefDirective } from './components/dynamic-content-outlet/directives/dynamic-outlet-ref.directive';
import { NgMarqueeModule } from 'ng-marquee';
import { SiteAnnComponent } from './components/ann-marquee/site-ann.component';
import { JackpotComponent } from './components/jackpot/jackpot.component';
import { DialogComponent } from './components/dialog/dialog.component'; 

@NgModule({

    imports: [
        CommonModule,
        FormsModule,
        PaginationModule.forRoot(),
        CarouselModule,
        NgMarqueeModule,
    ],
    declarations: [

        FileUploadComponent,
        //SpinnerComponent, 
        EllipsisComponent, 
        ContentPaginationComponent,
        MainCarouselComponent,
        SafePipe,
        CallbackPipe,
        DynamicContentOutletComponent,
        DynamicOutletRefDirective,
        DialogComponent,
        EnumToArrayPipe,
        SiteAnnComponent,
        JackpotComponent
    ],
    entryComponents: [

    ],
    exports: [
        FileUploadComponent,
        //SpinnerComponent,
        EllipsisComponent, 
        ContentPaginationComponent,
        MainCarouselComponent,
        SafePipe,
        CallbackPipe,
        DynamicContentOutletComponent,
        DynamicOutletRefDirective,
        DialogComponent,
        EnumToArrayPipe,
        SiteAnnComponent,
        JackpotComponent
    ],   
    providers: [DynamicContentService]
})
export class SharedModule {

}
