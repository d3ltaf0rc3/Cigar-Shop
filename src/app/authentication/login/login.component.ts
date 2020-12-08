import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../index.scss']
})
export class LoginComponent {
  constructor(private authService: AuthenticationService, private router: Router) { }

  loginHandler(value: object): void {
    this.authService.login(value).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
