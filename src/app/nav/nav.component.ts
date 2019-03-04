import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent  {


  constructor(public auth: AuthService, private cs: ChatService) { }



  // show/hide userlist
  toggleUsers() {
    this.cs.showusers = !this.cs.showusers;
  }

  logout() {
    this.auth.logout();
  }

}
