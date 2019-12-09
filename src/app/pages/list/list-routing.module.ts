import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPage } from './list.page';

const routes: Routes = [
  {
    path: '',
    component: ListPage
  },
  {
    path: 'settings-list',
    loadChildren: () => import('./settings-list/settings-list.module').then( m => m.SettingsListPageModule)
  },
  {
    path: 'sliding-item',
    loadChildren: () => import('./sliding-item/sliding-item.module').then( m => m.SlidingItemPageModule)
  },
  {
    path: 'delete-items',
    loadChildren: () => import('./delete-items/delete-items.module').then( m => m.DeleteItemsPageModule)
  },
  {
    path: 'reactive-list-label',
    loadChildren: () => import('./reactive-list-label/reactive-list-label.module').then( m => m.ReactiveListLabelPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'crypto-list',
    loadChildren: () => import('./crypto-list/crypto-list.module').then( m => m.CryptoListPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPageRoutingModule {}
