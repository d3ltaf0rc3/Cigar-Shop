import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../index.scss']
})
export class LoginComponent {
  constructor(private authService: AuthenticationService) { }

  loginHandler(value: object): void {
    this.authService.login(value).subscribe(resp => console.log(resp));
  }
}
