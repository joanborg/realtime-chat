<<<<<<< HEAD
import { Component, AfterViewChecked } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 1c253b0bee73ede05c6d9a9c8c7b9d94cc61680f
import { ChatService } from '../services/chat.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../services/auth.service';




export interface Item {
   id? : string;
   content?: string;
   user?: string;
   createdAt: Date; 
<<<<<<< HEAD
=======
   userStatus?: boolean;
>>>>>>> 1c253b0bee73ede05c6d9a9c8c7b9d94cc61680f
}



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
<<<<<<< HEAD
export class ChatComponent implements AfterViewChecked {


  constructor(private cs: ChatService) { }


  // Scrolling down the content to find most recent messages
  ngAfterViewChecked() {
    var el = document.querySelector("#chatview");
=======
export class ChatComponent implements OnInit {


  constructor(public cs: ChatService, private afs: AngularFirestore, private auth: AuthService) { }

  ngOnInit() {}


  // Scrolling down the content to find most recent messages
  // TODO: fix selector
  ngAfterViewChecked() {
    var el = document.querySelector('body > app-root > div > app-chat > main > div > div.content.flex-fill.h-100');
>>>>>>> 1c253b0bee73ede05c6d9a9c8c7b9d94cc61680f
    el.scrollTo(0, el.scrollHeight);
  }



  submit(form) {
    if (form.value) {
      this.cs.sendMessage(form.value);
    }
    form.reset();
  }
}
