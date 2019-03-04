import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });



  constructor(private auth: AuthService, private router: Router) { }
  errorMessage: string;
  successMessage: string;

 


  // attempt login, router redirects to chat on successful login
  emailLogin(value) {
    this.auth.emailLogin(value)
      .then(res => {
        this.errorMessage = "";
        this.successMessage = "Successfully logged in!";
        this.router.navigate(['/chat']);
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = "";
      })
  }


  googleLogin() {
    this.auth.googleLogin();
  }



}
