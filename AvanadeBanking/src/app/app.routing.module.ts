import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [

    {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ],
})
export class AppRoutingModule { }