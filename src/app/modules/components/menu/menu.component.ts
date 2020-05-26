import { Component, OnInit } from '@angular/core';
import { getDefaultService } from 'selenium-webdriver/chrome';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  showForm = false;
  constructor() { }

  ngOnInit(): void {
  }

  showSearchForm() {
    this.showForm = true;
  }
}
