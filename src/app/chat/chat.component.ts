import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../services/auth.service';




export interface Item {
   id? : string;
   content?: string;
   user?: string;
   createdAt: Date; 
   userStatus?: boolean;
}



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {


  constructor(public cs: ChatService, private afs: AngularFirestore, private auth: AuthService) { }

  ngOnInit() {}


  // Scrolling down the content to find most recent messages
  // TODO: fix selector
  ngAfterViewChecked() {
    var el = document.querySelector('body > app-root > div > app-chat > main > div > div.content.flex-fill.h-100');
    el.scrollTo(0, el.scrollHeight);
  }



  submit(form) {
    if (form.value) {
      this.cs.sendMessage(form.value);
    }
    form.reset();
  }
}
