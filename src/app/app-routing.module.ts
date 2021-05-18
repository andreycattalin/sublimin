import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { SearchComponent } from './core/search/search.component';
import { DetailComponent } from './core/detail/detail.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch:"full" },
  { path: "ofertas", component: SearchComponent },
  { path: "empleo/:id", component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
