import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search/search.component';
import { ControlsComponent } from './search/controls/controls.component';
import { ResultsComponent } from './search/results/results.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { CardComponent } from './search/results/card/card.component';
import {MatCardModule} from '@angular/material/card';
import { RatingComponent } from './search/results/card/rating/rating.component';
import {SearchService} from './search/search.service';
import {HttpClientModule} from '@angular/common/http';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [SearchComponent, ControlsComponent, ResultsComponent, CardComponent, RatingComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatCardModule,
    HttpClientModule,
    ScrollingModule,
    ReactiveFormsModule
  ],
  providers: [
    SearchService
  ]
})
export class SearchModule { }
