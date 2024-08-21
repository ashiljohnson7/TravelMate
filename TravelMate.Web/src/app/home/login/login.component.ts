import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  login() {
    // Your login logic here (e.g., API call, validation, etc.)
    console.log('Logging in:', this.username, this.password);
  }
  
}
