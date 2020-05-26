import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'overview', loadChildren: () => import('./modules/overview/overview.module').then( m => m.OverviewModule) },
  { path: 'messages', loadChildren: () => import('./modules/messages/messages.module').then( m => m.MessagesModule) },
  { path: 'search', loadChildren: () => import('./modules/search/search.module').then( m => m.SearchModule) },
  { path: 'filter', loadChildren: () => import('./modules/filter/filter.module').then( m => m.FilterModule) },
  { path: 'history', loadChildren: () => import('./modules/history/history.module').then( m => m.HistoryModule) },
  { path: 'account', loadChildren: () => import('./modules/myaccount/myaccount.module').then( m => m.MyaccountModule) },
  { path: '', redirectTo: 'search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
