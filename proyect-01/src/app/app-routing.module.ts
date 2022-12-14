import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { ExitGuard } from './guards/exit.guard';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormTemplateComponent } from './pages/form-template/form-template.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: 'pokemon/:pokeId', component: PokemonComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
    canDeactivate: [ExitGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'form-test',
    component: FormTemplateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
