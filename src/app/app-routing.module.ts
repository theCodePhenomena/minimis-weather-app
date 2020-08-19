import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';
import { AddCityPageComponent } from './pages/add-city/add-city.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'add', component: AddCityPageComponent},
  {path: 'details/:city', component: DetailsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
