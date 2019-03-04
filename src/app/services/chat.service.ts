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
<<<<<<< HEAD
  constructor(private afs: AngularFirestore, private auth: AuthService) {
=======
  constructor(private afs: AngularFirestore, public auth: AuthService) {
>>>>>>> 1c253b0bee73ede05c6d9a9c8c7b9d94cc61680f
    this.messagesCollection = afs.collection<Item>('chat', ref => ref.orderBy('createdAt'));
    this.messages = this.messagesCollection.valueChanges();
  }



<<<<<<< HEAD
  // Adds a new message, its sender and creation time to the messages collection
  sendMessage(_content: string) {
    const _createdAt = new Date();

    this.auth.user$.subscribe(res => {
      this.messagesCollection.add({ content: _content, user: res.displayName, createdAt: _createdAt });
=======
  // Adds a new message, its sender and creation time to the database collection
  sendMessage(_content?: string, _userStatus?: boolean) {
    const _createdAt = new Date();
    

    this.auth.user$.subscribe(res => {
      this.messagesCollection.add({ content: _content, user: res.displayName, createdAt: _createdAt, userStatus: _userStatus });
>>>>>>> 1c253b0bee73ede05c6d9a9c8c7b9d94cc61680f
    })


  }
}

