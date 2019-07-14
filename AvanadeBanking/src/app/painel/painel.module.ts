import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PainelRoutingModule } from './painel.routing.module';
import { PagePainelComponent } from './page-painel/page-painel.component';

@NgModule({
  declarations: [
    PagePainelComponent
  ],
  imports: [
    CommonModule,
    PainelRoutingModule,
    FormsModule,
  ]
})
export class PainelModule { }
