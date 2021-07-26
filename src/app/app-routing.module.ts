import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VaccineCentersDetailsComponent } from './vaccine-centers-details/vaccine-centers-details.component';
import { VaccineCentersComponent } from './vaccine-centers/vaccine-centers.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login' , component: LoginComponent},
  { path: 'listing' , component: VaccineCentersComponent},
  { path: 'detail' , component: VaccineCentersDetailsComponent},
  // { path: 'home' , loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)},
  // { path: 'dashboard' , loadChildren: () => import('./Dashboard/dashboard-module.module').then(m => m.DashboardModuleModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
