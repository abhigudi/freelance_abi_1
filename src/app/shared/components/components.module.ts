import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { LeftNavComponent } from './left-nav/left-nav.component';
import {MatListModule} from '@angular/material/list';
import {RouterModule} from '@angular/router';

const components = [
  HeaderComponent,
  LeftNavComponent
];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatListModule,
    RouterModule,
  ]
})
export class ComponentsModule { }
