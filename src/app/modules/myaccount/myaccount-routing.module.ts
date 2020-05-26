import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyaccountComponent} from './myaccount/myaccount.component';


const routes: Routes = [
  { path: '', component: MyaccountComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyaccountRoutingModule { }
