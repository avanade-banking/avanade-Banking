import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferPageComponent } from './pages/transfer-page/transfer-page.component';

const tranferRoutes: Routes = [

    {
        path: '',
        component: TransferPageComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(tranferRoutes) ],
    exports: [ RouterModule ],
})
export class TransferRoutingModule { }