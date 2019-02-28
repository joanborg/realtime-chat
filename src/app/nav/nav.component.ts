import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  constructor(public auth: AuthService, private router: Router, public cs: ChatService) { }

  ngOnInit() {
  }

  // show/hide userlist
  toggleUsers() {
    this.cs.showusers = !this.cs.showusers;
  }

  logout() {
    this.auth.logout();
  }

}
