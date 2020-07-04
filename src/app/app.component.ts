import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'monAgence';

  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyAEO5cIH5Zd--dIJ_qsYaKJLq5b5kkfuJw',
      authDomain: 'monagence-ed40c.firebaseapp.com',
      databaseURL: 'https://monagence-ed40c.firebaseio.com',
      projectId: 'monagence-ed40c',
      storageBucket: 'monagence-ed40c.appspot.com',
      messagingSenderId: '606037965746',
      appId: '1:606037965746:web:cc55f52c269b311a1882ab'
    };
    firebase .initializeApp(firebaseConfig);
  }
}
