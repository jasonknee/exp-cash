import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { PlayersComponent } from './pages/players/players.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { ChallengeComponent } from './components/challenge/challenge.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    SignupComponent,
    PlayersComponent,
    ProfileComponent,
    TopbarComponent,
    ChallengeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
