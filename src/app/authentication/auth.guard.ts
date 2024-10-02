import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthenticationService) { }

  canActivate(_: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!!this.authService.user) {
      if (state.url === '/login' || state.url === '/register') {
        this.router.navigate(['/']);
        return false;
      }
      return true;
    }
    if (state.url === '/login' || state.url === '/register') {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
