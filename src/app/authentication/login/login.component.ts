import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../index.scss']
})
export class LoginComponent {
  error: string;
  constructor(private authService: AuthenticationService, private router: Router) { }

  loginHandler(value: object): void {
    this.authService.login(value).pipe(
      catchError(err => {
        if (!err.ok) {
          this.error = err.error.message;
          return throwError(err);
        }
      })
    ).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
