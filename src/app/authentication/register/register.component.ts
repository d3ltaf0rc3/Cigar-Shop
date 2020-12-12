import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../index.scss']
})
export class RegisterComponent {
  error: string;
  constructor(private authService: AuthenticationService, private router: Router) { }

  registerHandler(value: object): void {
    this.authService.register(value).pipe(
      catchError(err => {
        if (!err.ok) {
          this.error = err.error.message;
          return throwError(err);
        }
      })
    ).subscribe(() => this.router.navigate(['/']));
  }
}
