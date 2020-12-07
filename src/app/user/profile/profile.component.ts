import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: IUser;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getProfile().subscribe(user => {
      this.user = user;
    });
  }

  changePasswordHandler(value: object): void {
    // TODO: implement change password functionality
  }
}
