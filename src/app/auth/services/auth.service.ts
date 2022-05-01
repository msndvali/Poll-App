import { Injectable } from '@angular/core';
import { FacebookAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth) {}

  FacebookAuth() {
    return this.AuthLogin(new FacebookAuthProvider());
  }

  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result: any) => {
        const user = result.user._delegate;
        localStorage.setItem('user', JSON.stringify(user));
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
