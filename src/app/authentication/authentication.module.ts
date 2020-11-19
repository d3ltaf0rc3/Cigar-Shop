import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AuthenticationService } from './authentication.service';
import { SharedModule } from '../shared/shared.module';

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
    SharedModule
  ],
  exports: [
    LoginFormComponent,
    RegisterFormComponent
  ]
})
export class AuthenticationModule { }
