<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 1c253b0bee73ede05c6d9a9c8c7b9d94cc61680f
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
<<<<<<< HEAD
export class SignupComponent {
=======
export class SignupComponent implements OnInit {
>>>>>>> 1c253b0bee73ede05c6d9a9c8c7b9d94cc61680f

  signupForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    displayName: new FormControl()
  });

  constructor(private auth: AuthService, private router: Router) { }

  errorMessage: string;
  successMessage: string;

<<<<<<< HEAD
 
=======
  ngOnInit() {
  }
>>>>>>> 1c253b0bee73ede05c6d9a9c8c7b9d94cc61680f


  // attempts registering a new account.
  // updates displayname to database
  // redirects to chat if login is successful
  trySignup(value) {
    this.auth.doSignup(value)
      .then(res => {
<<<<<<< HEAD
=======
        console.log(res);
>>>>>>> 1c253b0bee73ede05c6d9a9c8c7b9d94cc61680f
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

