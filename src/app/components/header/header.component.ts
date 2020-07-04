import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // isDisabled = true;
  title = 'Ma super Agence';

  isLoginIn = false;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(
      (userSession) => {
        console.log( 'userSession', userSession);
        if (userSession) {
          this.isLoginIn = true;
        } else {
          this.isLoginIn = false;
        }
      }
    );
  }

/*   onClick() {
    this.isDisabled = false;
  } */

  onSignOut() {
    this.authenticationService.signOutUser();
  }
}
