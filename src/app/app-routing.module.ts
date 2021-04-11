import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { LandingComponent } from './pages/landing/landing.component';
import { PlayersComponent } from './pages/players/players.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  { component: LandingComponent, path: '' },
  { component: LoginComponent, path: '' },
  { component: SignupComponent, path: '' },
  { component: PlayersComponent, path: '' },
  { component: ProfileComponent, path: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
