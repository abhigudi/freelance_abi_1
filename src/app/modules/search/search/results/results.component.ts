import { Component, OnInit, Input } from '@angular/core';
import { UserData} from '../search.interface';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  @Input() data: UserData[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
