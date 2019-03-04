import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Item } from '../chat/chat.component';
import { AuthService } from '../services/auth.service';




@Injectable({
  providedIn: 'root'
})
export class ChatService {

  messagesCollection: AngularFirestoreCollection<Item>;
  messages: Observable<Item[]>;
  showusers = true;
  


  // creates reference to database's messages collection
  // valueChanges() listens for new messages to be rendered
  constructor(private afs: AngularFirestore, private auth: AuthService) {
    this.messagesCollection = afs.collection<Item>('chat', ref => ref.orderBy('createdAt'));
    this.messages = this.messagesCollection.valueChanges();
  }



  // Adds a new message, its sender and creation time to the messages collection
  sendMessage(_content: string) {
    const _createdAt = new Date();

    this.auth.user$.subscribe(res => {
      this.messagesCollection.add({ content: _content, user: res.displayName, createdAt: _createdAt });
    })


  }
}

