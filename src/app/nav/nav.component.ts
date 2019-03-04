<<<<<<< HEAD
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
=======
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
>>>>>>> 1c253b0bee73ede05c6d9a9c8c7b9d94cc61680f
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
<<<<<<< HEAD
export class NavComponent  {


  constructor(private auth: AuthService, private cs: ChatService) { }


=======
export class NavComponent implements OnInit {


  constructor(public auth: AuthService, private router: Router, public cs: ChatService) { }

  ngOnInit() {
  }
>>>>>>> 1c253b0bee73ede05c6d9a9c8c7b9d94cc61680f

  // show/hide userlist
  toggleUsers() {
    this.cs.showusers = !this.cs.showusers;
  }

  logout() {
    this.auth.logout();
  }

}
