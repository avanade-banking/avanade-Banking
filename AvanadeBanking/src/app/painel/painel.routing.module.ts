import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagePainelComponent } from './page-painel/page-painel.component';

const painelRoutes: Routes = [

    {
        path: '',
        component: PagePainelComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(painelRoutes) ],
    exports: [ RouterModule ],
})
export class PainelRoutingModule { }