import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HomeComponent} from './components/home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {RegisterComponent} from './components/register/register.component';
import {AuthService} from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import {FlashMessagesModule} from 'angular2-flash-messages';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FlashMessagesModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
