import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { SearchComponent } from './core/search/search.component';
import { DetailComponent } from './core/detail/detail.component';
import { DashboardUserComponent } from './core/dashboard-user/dashboard-user.component';
import { DashboardCompanyComponent } from './core/dashboard-company/dashboard-company.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch:"full" },
  { path: "ofertas", component: SearchComponent },
  { path: "empleo/:id", component: DetailComponent },
  { path: "me", component: DashboardUserComponent },
  { path: "company", component: DashboardCompanyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
