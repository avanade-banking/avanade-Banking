import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferPageComponent } from './pages/transfer-page/transfer-page.component';
import { TransferRoutingModule } from './transfer.routing.module';

@NgModule({
  declarations: [
    TransferPageComponent
  ],
  imports: [
    CommonModule,
    TransferRoutingModule
  ]
})
export class TransferModule { }
