import { ArtikliRestService } from './rest/artikli-rest.service';
import { SwalService } from 'src/app/services/swal.service';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  filters: any = {
  };

  data: any =  {
    kategorije: [],
    korisnici: [],
    artikli: [],
    racuni: [],
    kategorijeSidebar: [],
    totalCount: 0
  };

  filteredArtikli: any[] = [];

  constructor(
    private http: HttpService,
    private swal: SwalService,
    private router: Router,
    private artikliService: ArtikliRestService
  ) { }


  init() {
    this.filteredArtikli = this.filteredArtikli = JSON.parse(JSON.stringify(this.data.artikli));;
  }

  dodajArtikl(artikl) {
    this.artikliService.insert(artikl).subscribe(
      data => {
        this.data.artikli.unshift(data.data);
        this.swal.ok("Artikl uspješno dodan!");
        this.router.navigate(['/']);
      },
      err => {
        this.swal.err("Greška!");
      }
    );
  }

  reset() {
    this.filters = {};
    this.applyFilters();
    this.router.navigate(['/']);
  }

  sidebarItemKategorijaOnClick(item) {
    this.filters.kategorija = item;
    this.applyFilters();
    this.router.navigate(['/']);
  }

  searchInputOnKeyUp(text) {
    this.filters.searchInput = text;
    if(text.length == 0 || text.length > 1) {
      this.applyFilters();
    }
  }

  onSortSelectChange(sort) {
    this.filters.sort = sort;

    if(this.filters.sort == 1) {
      this.filteredArtikli.sort((a, b) => { return a.cijena - b.cijena; });
    }
    else if(this.filters.sort == 2) {
      this.filteredArtikli.sort((a, b) => { return b.cijena - a.cijena; });
     }
    else if(this.filters.sort == 3) {
      this.filteredArtikli.sort((a, b) => { return new Date(a.created_at).getTime() - new Date(b.created_at).getTime(); });
    }
    else if(this.filters.sort == 4) {
      this.filteredArtikli.sort((a, b) => { return new Date(b.created_at).getTime() - new Date(a.created_at).getTime(); });
    }
  }

  applyFilters() {
    if(this.filters.kategorija) {
      this.filteredArtikli = JSON.parse(JSON.stringify(this.filters.kategorija.artikli));
    } else {
      this.filteredArtikli = JSON.parse(JSON.stringify(this.data.artikli));
    }

    let temp = JSON.parse(JSON.stringify(this.filteredArtikli));
    if(this.filters.searchInput) {
      this.filteredArtikli = this.filteredArtikli.filter(x => x.naziv.toLowerCase().includes(this.filters.searchInput.toLowerCase()));

      if(this.filters.searchInput === '') {
        this.filteredArtikli = JSON.parse(JSON.stringify(temp));
      }
    }
     else {
      this.filteredArtikli = JSON.parse(JSON.stringify(temp));
    }
  }

  getSelectedKategorijaNaziv() {
    if(!this.filters.kategorija) {
      return 'Pregled svih artikala';
    } else {
      return this.filters.kategorija.kategorija.naziv;
    }
  }

  getSelectedKategorijaCount() {
    return this.filteredArtikli.length;
  }

  syncData(showLoading=false): Observable<any> {
    if(showLoading) {
      this.swal.showLoading();
    }
    return this.http.request('get', this.http.API_LINK + '/datastore/syncData');
  }

  hideLoading() {
    this.swal.hideLoading();
  }
}
