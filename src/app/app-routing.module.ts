import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataPreviewComponent } from './pages/data-preview/data-preview.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

//TODO: 1. configurer la route /challenge
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'dataset', component: DataPreviewComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
