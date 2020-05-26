import { Component, OnInit, Input } from '@angular/core';
import {UserData} from '../../search.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() user: UserData;

  constructor() { }

  ngOnInit(): void {
  }

}
