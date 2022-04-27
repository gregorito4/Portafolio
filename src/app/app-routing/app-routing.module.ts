import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../Dashboard/main/main.component';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../auth/login/login.component';

const routes: Routes = [
  {
    path: ' ',
    component: MainComponent,
    children: [
      { path: 'dashboard', component: MainComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
