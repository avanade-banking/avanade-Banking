import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageExtractComponent } from './page-extract/page-extract.component';

const extractRoutes: Routes = [

    {
        path: '',
        component: PageExtractComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(extractRoutes) ],
    exports: [ RouterModule ],
})
export class ExtractRoutingModule { }