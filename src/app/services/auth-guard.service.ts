import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private auth: AuthService, private router: Router) { }

  // checks whether user is logged in and allowed to user-only pages.
  // otherwise redirects back to login
  canActivate() {
    return this.auth.user$.pipe(map(user => {
      if (user) return true;

      this.router.navigate(['/login']);
      return false;
    }));
  }
}