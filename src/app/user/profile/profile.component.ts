import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { IUser } from 'src/app/shared/interfaces/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: IUser;
  constructor(private userService: UserService, private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getProfile().subscribe(user => {
      this.user = user;
    });
  }

  changePasswordHandler(value: object): void {
    this.userService.changePassword(value).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

  deleteProfileHandler(): void {
    this.userService.deleteProfile().subscribe(() => {
      this.authService.logout().subscribe();
      this.router.navigate(['/']);
    });
  }
}
