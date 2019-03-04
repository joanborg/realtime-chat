import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    displayName: new FormControl()
  });

  constructor(private auth: AuthService, private router: Router) { }

  errorMessage: string;
  successMessage: string;

 


  // attempts registering a new account.
  // updates displayname to database
  // redirects to chat if login is successful
  trySignup(value) {
    this.auth.doSignup(value)
      .then(res => {
        this.errorMessage = "";
        this.successMessage = "Your account has been created";
        this.auth.updateDisplayName(value);
        this.router.navigate(['/chat']);
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = "";
      })
  }
}

