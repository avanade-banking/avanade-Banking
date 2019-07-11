import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './pages/login-page/login-page.component';

const homeRoutes: Routes = [

    {
        path: '',
        component: LoginPageComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(homeRoutes) ],
    exports: [ RouterModule ],
})
export class LoginRoutingModule { }