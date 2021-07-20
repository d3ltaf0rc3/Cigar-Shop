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

  loginHandler(value: { username: string; password: string }): void {
    this.authService.login(value).pipe(
      catchError(err => {
        this.error = err.error.data;
        return throwError(() => err.error.data);
      })
    ).subscribe(() => this.router.navigate(['/']));
  }
}
