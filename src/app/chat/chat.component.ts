import { Component, AfterViewChecked } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../services/auth.service';




export interface Item {
   id? : string;
   content?: string;
   user?: string;
   createdAt: Date; 
}



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements AfterViewChecked {


  constructor(private cs: ChatService) { }


  // Scrolling down the content to find most recent messages
  ngAfterViewChecked() {
    var el = document.querySelector("#chatview");
    el.scrollTo(0, el.scrollHeight);
  }



  submit(form) {
    if (form.value) {
      this.cs.sendMessage(form.value);
    }
    form.reset();
  }
}
