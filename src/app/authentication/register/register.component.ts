import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../index.scss']
})
export class RegisterComponent {
  constructor(private authService: AuthenticationService) { }

  registerHandler(value: object): void {
    this.authService.register(value).subscribe(resp => console.log(resp));
  }
}
