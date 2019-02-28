import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });



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
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = "";
      })
  }


  googleLogin() {
    this.auth.googleLogin();
  }

  userLoggedIn() {
    this.cs.sendMessage(" just logged in!", true)
  }


}
