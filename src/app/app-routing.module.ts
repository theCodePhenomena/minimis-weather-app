import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddCardComponent } from './components/add-card/add-card.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'add', component: AddCardComponent},
  {path: 'details/:city', component: DetailsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
