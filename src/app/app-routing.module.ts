import { PregledArtiklaComponent } from './components/pregled-artikla/pregled-artikla.component';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AdminKategorijeComponent } from './components/admin-kategorije/admin-kategorije.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminPageGuard } from './guards/admin-page.guard';
import { AdminKorisniciComponent } from './components/admin-korisnici/admin-korisnici.component';
import { LoginPageGuard } from './guards/login-page.guard';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LoginComponent } from './components/login/login.component';
import { Test1Component } from './components/test1/test1.component';
import { IndexComponent } from './components/index/index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', component: MainLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', component: IndexComponent },
      { path: 'test1', component: Test1Component },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'profile-settings', component: ProfileSettingsComponent, canActivate: [LoginGuard] },
      { path: 'pregled-artikla/:id', component: PregledArtiklaComponent },
      { path: 'admin/korisnici', component: AdminKorisniciComponent, canActivate: [AdminPageGuard] },
      { path: 'admin/kategorije', component: AdminKategorijeComponent, canActivate: [AdminPageGuard] },
    ]
  },

  { path: 'login', component: LoginComponent, canActivate: [LoginPageGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [LoginPageGuard] },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
