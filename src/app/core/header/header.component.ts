import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private authService: AuthenticationService, private router: Router) { }

  get isLogged(): boolean {
    return !!this.authService.user;
  }

  logoutHandler(): void {
    this.authService.logout().subscribe(() => this.router.navigate(['/']));
  }
}
