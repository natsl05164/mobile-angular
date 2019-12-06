import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { GeneralRoutingModule } from './general-routing.module'; 

import { GeneralCommonModule } from './general.common.module';

import { AccountComponent } from './account/components/account/account.component';
import { HistoryResultsComponent } from './account/components/history-results/history-results.component';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
    imports: [
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatSortModule,
     
    GeneralRoutingModule,
    GeneralCommonModule
  ],
  declarations: [
    AccountComponent,
    GeneralRoutingModule.views,
    HistoryResultsComponent 
  ]

})
export class GeneralModule { }
