import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AuthenticationService } from './authentication.service';

@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent
  ],
  providers: [
    AuthenticationService
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    LoginFormComponent,
    RegisterFormComponent
  ]
})
export class AuthenticationModule { }
