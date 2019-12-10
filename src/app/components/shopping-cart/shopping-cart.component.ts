import { ArtikliRestService } from './../../services/rest/artikli-rest.service';
import { ShoppingCartService } from './../../services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(
    public shoppingCartService: ShoppingCartService,
    private artikliRestService: ArtikliRestService,
    private location: Location
  ) { }

  ngOnInit() {
    this.artikliRestService.getAllGrouped()
      .subscribe(data => {
        console.log(data);

      });
  }

  nazad() {
    this.location.back();
  }

  remove(a) {
    this.shoppingCartService.ukloniSve(a);
  }

}
