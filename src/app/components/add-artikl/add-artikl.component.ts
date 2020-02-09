import { SwalService } from './../../services/swal.service';
import { AuthService } from 'src/app/services/auth.service';
import { DataStoreService } from 'src/app/services/data-store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-artikl',
  templateUrl: './add-artikl.component.html',
  styles: []
})
export class AddArtiklComponent implements OnInit {
  artikl: any = {
    kategorija_id: '0'
  };
  kategorije: any = [];

  constructor(
    private store: DataStoreService,
    private auth: AuthService,
    private swal: SwalService
  ) { }

  ngOnInit() {
    this.kategorije = this.store.data.kategorije;
    this.artikl.user_id = this.auth.getId();
  }

  onCancel() {

  }

  dodajArtikl() {
    if(this.validate()) {
      this.store.dodajArtikl(this.artikl);
    }
  }

  validate() {
    if(this.artikl.naziv){
      if(this.artikl.cijena){
        if(this.artikl.opis){
          if(this.artikl.kategorija_id){

            return true;
          } else{
            this.swal.err("Odaberite kategoriju!");
          }
        } else {
          this.swal.err("Unesite opis!");
        }
      } else {
        this.swal.err("Unesite cijenu!");
      }
    } else {
      this.swal.err("Unesite naziv artikla!");
    }
  }

  toJson() {
    return JSON.stringify(this.artikl);
  }
}
