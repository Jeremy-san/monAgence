import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { SigninComponent } from './authentication/signin/signin.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'admin/dashboard', component: AdminDashboardComponent
  },
  {
    path: 'login', component: SigninComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
