import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { MainComponent } from './Dashboard/main/main.component';
import { DashboardComponent } from './Dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],



  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
