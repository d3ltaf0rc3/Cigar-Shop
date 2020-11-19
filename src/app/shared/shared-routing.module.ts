import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginFormComponent } from '../authentication/login-form/login-form.component';
import { RegisterFormComponent } from '../authentication/register-form/register-form.component';

const routes: Routes = [
    { path: 'login', component: LoginFormComponent },
    { path: 'register', component: RegisterFormComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SharedRoutingModule { }
