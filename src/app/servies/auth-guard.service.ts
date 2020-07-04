import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import * as firebase from 'firebase';
import { resolve } from 'dns';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): Promise<boolean> | Observable<boolean> | boolean {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().onAuthStateChanged(
          (userSession) => {
            if (userSession) {
              resolve(true);
            } else {
              this.router.navigate(['home']);
              resolve(false);
            }
          }
        );
      }
    );
  }
}
