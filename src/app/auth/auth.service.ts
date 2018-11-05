import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(
      error => console.log(error)
    );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
      response => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getIdToken().then(
          token => this.token = token
        );
      }
    );
  }
  logout() {
    firebase.auth().signOut();
    this.token = null;
  }
   getToken() {
    // async action
    // just retrieving the token from localstorage is synchronous.
    // it auto checks if the token is still valid,
    // if invalid / expired, it tries to give a new one.
    firebase.auth().currentUser.getIdToken()
    .then(
      token => this.token = token
    );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
