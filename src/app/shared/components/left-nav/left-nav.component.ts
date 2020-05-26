import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/shared/services/app-state.service';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit {

  message: boolen;
  @Output() messageEvent = new EventEmitter<string>();

  constructor(private data: AppStateService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message);
  }


  setflag() {
    this.message = !this.message;
    this.data.changeMessage(this.message);
  }

}
