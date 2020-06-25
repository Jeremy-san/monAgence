import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isDisabled = true;
  title = 'Ma super Agence';

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.isDisabled = false;
  }
}
