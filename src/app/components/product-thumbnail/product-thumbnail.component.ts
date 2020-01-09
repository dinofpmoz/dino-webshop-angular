import { SwalService } from 'src/app/services/swal.service';
import { ShoppingCartService } from './../../services/shopping-cart.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.scss']
})
export class ProductThumbnailComponent implements OnInit {
  @Input() product: any = {};
  @Input() addToCartButtonDisabled = false;
  @Output() onUkloni = new EventEmitter<any>();

  constructor(
    private router: Router,
    private shoppingCartService: ShoppingCartService,
    private swal: SwalService) { }

  ngOnInit() {
  }

  showAddToCartBtn() {
    return this.router.url !== '/profile-settings';
  }

  ukloni(product, e) {
    e.stopPropagation();
    this.onUkloni.emit(product);
  }

  addToCart(product, e) {
    e.stopPropagation();
    if(this.addToCartButtonDisabled) {
      this.swal.err("Ne možete kupiti sami svoj artikl!");
    } else {
      this.shoppingCartService.dodajArtikl(product);
    }
  }

  showDetails(product) {
    alert(JSON.stringify(product));
  }

  openUserPage(userId, e) {
    e.stopPropagation();
    this.router.navigate(['/user-profile', userId]);
  }

  openKategorijaPage(kategorijaId, e) {
    e.stopPropagation();
    this.router.navigate(['/kategorija', kategorijaId]);
  }

}
