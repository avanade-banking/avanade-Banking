import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';

const homeRoutes: Routes = [

    {
        path: '',
        component: HomePageComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(homeRoutes) ],
    exports: [ RouterModule ],
})
export class HomeRoutingModule { }