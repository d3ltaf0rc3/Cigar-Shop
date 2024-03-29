import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IRootState } from 'src/app/+store';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { IUser } from 'src/app/shared/interfaces/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  error: string;
  user: IUser;

  constructor(
    private userService: UserService,
    private authService: AuthenticationService,
    private router: Router,
    private store: Store<IRootState>) { }

  ngOnInit(): void {
    this.store.select((state) => state.auth.user).subscribe(user => {
      this.user = user;
    });
  }

  changePasswordHandler(value: { currentPassword: string; password: string; repeatPassword: string }): void {
    this.userService.changePassword(value).pipe(
      tap(() => this.authService.clearUser()),
      catchError(err => {
        this.error = err.error.data;
        return throwError(() => err.error.data);
      })
    ).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  deleteProfileHandler(): void {
    this.userService.deleteProfile().pipe(
      tap(() => this.authService.clearUser())
    ).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
