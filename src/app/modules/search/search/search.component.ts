import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription, from} from 'rxjs';
import {SearchService} from './search.service';
import {UserData, SearchFilterFields} from './search.interface';
import { AppStateService } from 'src/app/shared/services/app-state.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  filteredData: UserData[] = [];
  fullData: UserData[] = [];
  searchFilterFields: SearchFilterFields;
  public showSearchBar = false;
  message: boolean;

  constructor(public service: SearchService, public stateservice: AppStateService) { }

  ngOnInit(): void {
    this.stateservice.currentMessage.subscribe(message => this.message = message);
    console.log(this.message);
    this.subscription = this.service.getData().subscribe( data => {
      data = this.service.addImage(data);
      this.searchFilterFields = this.service.getUniqueSearchFields(data);
      this.fullData = data;
      this.filteredData = data;
    });
  }

  onSelectedFilter(event: SearchFilterFields): void {
    this.filteredData = [...this.service.filterSearchResults(this.fullData, event)];
  }

  ngOnDestroy(): void {
    if ( this.subscription ) { this.subscription.unsubscribe(); }
  }

}
