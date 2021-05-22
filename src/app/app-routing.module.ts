import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { SearchComponent } from './core/search/search.component';
import { DetailComponent } from './core/detail/detail.component';
import { DashboardUserComponent } from './core/dashboard-user/dashboard-user.component';
import { DashboardCompanyComponent } from './core/dashboard-company/dashboard-company.component';
import { RegisterComponent } from './core/register/register.component';
import { NewjobComponent } from './core/newjob/newjob.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch:"full" },
  { path: "ofertas", component: SearchComponent },
  { path: "empleo/:id", component: DetailComponent },
  { path: "panel", component: DashboardUserComponent },
  { path: "panel/empresa", component: DashboardCompanyComponent },
  { path: "registro", component: RegisterComponent },
  { path: "publicar", component: NewjobComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
