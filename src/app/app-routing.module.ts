import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  {
    path: 'theming',
    loadChildren: () => import('./pages/theming/theming.module').then( m => m.ThemingPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'ionic-official-components',
    loadChildren: () => import('./pages/ionic-official-components/ionic-official-components.module').then( m => m.IonicOfficialComponentsPageModule)
  },
  {
    path: 'timeline',
    loadChildren: () => import('./pages/timeline/timeline.module').then( m => m.TimelinePageModule)
  },
  {
    path: 'accordion-list',
    loadChildren: () => import('./pages/accordion-list/accordion-list.module').then( m => m.AccordionListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
