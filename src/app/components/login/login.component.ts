import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = ''; // Declare as string
  password: string = ''; // Declare as string

  login(): void {
    // You can now use these variables in the template with ngModel binding
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
