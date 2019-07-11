import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageExtractComponent } from './page-extract/page-extract.component';
import { ExtractRoutingModule } from './extract.routing.module';

@NgModule({
  declarations: [
    PageExtractComponent
  ],
  imports: [
    CommonModule,
    ExtractRoutingModule
  ]
})
export class ExtractModule { }
