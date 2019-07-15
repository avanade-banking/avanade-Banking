import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { TransferPageComponent } from './pages/transfer-page/transfer-page.component';
import { TransferRoutingModule } from './transfer.routing.module';


@NgModule({
  declarations: [
    TransferPageComponent
  ],
  imports: [
    CommonModule,
    TransferRoutingModule,
    FormsModule
  ]
})
export class TransferModule { }
