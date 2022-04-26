import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';

const routes : Routes = [

  {path: 'dashboard', component:DashboardComponent},  
  {path: 'login', component:LoginComponent},
  {path: '', redirectTo:'/dashboard', pathMatch:'full'},
  // {path: '**', component: NoFoundComponent} este ultimo para hacer las excepciones del 404 toca crear el componente

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
   
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
