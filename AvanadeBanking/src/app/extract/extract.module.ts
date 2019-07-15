import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageExtractComponent } from './page-extract/page-extract.component';
import { ExtractRoutingModule } from './extract.routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PageExtractComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExtractRoutingModule
  ]
})
export class ExtractModule { }
