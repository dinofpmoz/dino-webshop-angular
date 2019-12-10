import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ShoppingCartService {
  artikli =  {};
  total = 0;
  qty = 0;

  constructor() { }

  dodajArtikl(artikl) {
    let dodani = { qty: 0, total: artikl.cijena, artikl: artikl };
    if(artikl.id in this.artikli) {
      dodani = this.artikli[artikl.id];
    }
    dodani.qty++;
    dodani.total = dodani.qty * artikl.cijena;
    this.artikli[artikl.id] = dodani;
    this.qty++;
    this.total += artikl.cijena;
  }

  ukloniJedan(artikl) {
    if(artikl.id in this.artikli) {
      let dodani = this.artikli[artikl.id];
      if(dodani.qty > 0) {
        dodani.qty--;
        dodani.total = dodani.qty * artikl.cijena;
        this.artikli[artikl.id] = dodani;
        this.qty--;
        this.total -= artikl.cijena;

        if(dodani.qty <= 0){
          delete this.artikli[artikl.id];
        }
      }
    }
  }

  updateValues() {

  }

  updateQtyChange(artiklId) {
    this.artikli[artiklId].qty = (this.artikli[artiklId].qty == '' || this.artikli[artiklId].qty == null) ? 0 : this.artikli[artiklId].qty;


    this.artikli[artiklId].total = parseFloat(this.artikli[artiklId].qty) * parseFloat(this.artikli[artiklId].artikl.cijena);

    this.qty = 0;
    this.total = 0;

    for(var key of Object.keys(this.artikli)) {
      this.qty += parseInt(this.artikli[key].qty);
      this.total += parseFloat(this.artikli[key].total);
    }

  }


  ukloniSve(artikl) {
    if(artikl.id in this.artikli) {
      let dodani = this.artikli[artikl.id];
      this.qty -= dodani.qty;
      this.total -= (dodani.qty * artikl.cijena);
      delete this.artikli[artikl.id];
    }
  }

  isprazni() {
    this.artikli =  {};
    this.total = 0;
    this.qty = 0;
  }

  getData() {
    return { artikli: this.artikli, total: this.total, qty: this.qty };
  }

  toJSON() {
    return JSON.stringify(this.getData());
  }

}
