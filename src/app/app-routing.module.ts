import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('src/app/components/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () => import('src/app/components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'registerClaim',
    loadChildren: () => import('src/app/components/register-claim/register-claim.module').then(m => m.RegisterClaimModule)
  },
  {
    path: 'registerClaim/:codSinistro',
    loadChildren: () => import('src/app/components/register-claim/register-claim.module').then(m => m.RegisterClaimModule)
  },
  {
    path: 'confirmation/:codSinistro',
    loadChildren: () => import('src/app/components/confirmation-page/confirmation-page.module').then(m => m.ConfirmationPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
