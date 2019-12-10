import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ControlSidebarComponent } from './components/control-sidebar/control-sidebar.component';
import { Test1Component } from './components/test1/test1.component';
import { ContentHeaderComponent } from './components/content-header/content-header.component';
import { LoginComponent } from './components/login/login.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ProductThumbnailComponent } from './components/product-thumbnail/product-thumbnail.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminKorisniciComponent } from './components/admin-korisnici/admin-korisnici.component';
import { AddKorisnikModalComponent } from './components/add-korisnik-modal/add-korisnik-modal.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddKorisnikFormComponent } from './components/add-korisnik-form/add-korisnik-form.component';
import { AdminKategorijeComponent } from './components/admin-kategorije/admin-kategorije.component';
import { AddKategorijuFormComponent } from './components/add-kategoriju-form/add-kategoriju-form.component';
import { AddKategorijuModalComponent } from './components/add-kategoriju-modal/add-kategoriju-modal.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OnlyNumberDirective } from './directives/only-number.directive';
import { PregledArtiklaComponent } from './components/pregled-artikla/pregled-artikla.component';
import { PregledKorisnikaComponent } from './components/pregled-korisnika/pregled-korisnika.component';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ControlSidebarComponent,
    Test1Component,
    ContentHeaderComponent,
    LoginComponent,
    MainLayoutComponent,
    ProductThumbnailComponent,
    AdminKorisniciComponent,
    AddKorisnikModalComponent,
    SignupComponent,
    AddKorisnikFormComponent,
    AdminKategorijeComponent,
    AddKategorijuFormComponent,
    AddKategorijuModalComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    OnlyNumberDirective,
    PregledArtiklaComponent,
    PregledKorisnikaComponent,
    ProfileSettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
