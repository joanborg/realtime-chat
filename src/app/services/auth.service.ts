import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.user$ = afAuth.authState;

  }

  emailLogin(value) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => reject(err))
    })

  }

  // redirects to chat if google login is succesful
  googleLogin() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    this.afAuth.auth.onAuthStateChanged(res => {

      if (res) {
        this.router.navigate(['/chat']);
      }
    })

  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/login']);
  }

  // attempts to create a new account
  doSignup(value) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => reject(err))

    })

  }
  
  // assigns user a display name for chat on registration
  updateDisplayName(value) {
    this.user$.subscribe(res => {
      res.updateProfile({
        displayName: value.displayName,
        photoURL: ""
      })
    })
  }
}
