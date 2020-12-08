import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../index.scss']
})
export class RegisterComponent {
  constructor(private authService: AuthenticationService,private router: Router) { }

  registerHandler(value: object): void {
    this.authService.register(value).subscribe(() => this.router.navigate(['/']));
  }
}
