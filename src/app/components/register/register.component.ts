import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  register(username: string, email: string, password: string) {
    // Add your registration logic here
    console.log('User registered:', { username, email, password });
  }
}
