<<<<<<< HEAD
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
=======
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatService } from '../services/chat.service';
>>>>>>> 1c253b0bee73ede05c6d9a9c8c7b9d94cc61680f

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
<<<<<<< HEAD
export class LoginComponent {
=======
export class LoginComponent implements OnInit {
>>>>>>> 1c253b0bee73ede05c6d9a9c8c7b9d94cc61680f

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });



<<<<<<< HEAD
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
=======
  constructor(private auth: AuthService, private router: Router, private cs: ChatService ) { }
  errorMessage: string;
  successMessage: string;

  ngOnInit() {
  }


  // attempt login, redirects to chat on successful login
  emailLogin(value) {
    this.auth.emailLogin(value)
      .then(res => {
        console.log(res);
        this.errorMessage = "";
        this.successMessage = "Successfully logged in!";
        this.router.navigate(['/chat']);
        this.userLoggedIn();
>>>>>>> 1c253b0bee73ede05c6d9a9c8c7b9d94cc61680f
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = "";
      })
  }


  googleLogin() {
    this.auth.googleLogin();
  }

<<<<<<< HEAD
=======
  userLoggedIn() {
    this.cs.sendMessage(" just logged in!", true)
  }
>>>>>>> 1c253b0bee73ede05c6d9a9c8c7b9d94cc61680f


}
