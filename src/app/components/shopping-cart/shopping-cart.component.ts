import { AuthService } from './../../services/auth.service';
import { ArtikliRestService } from './../../services/rest/artikli-rest.service';
import { ShoppingCartService } from './../../services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(
    public shoppingCartService: ShoppingCartService,
    private location: Location,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  nazad() {
    this.location.back();
  }

  remove(a) {
    this.shoppingCartService.ukloniSve(a);
  }

  toCheckout() {
    if(this.auth.get()) {
      this.router.navigate(['/checkout']);
    } else {
      this.router.navigate(['/login']);
    }
  }

}
