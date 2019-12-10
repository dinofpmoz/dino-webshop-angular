import { SwalService } from './../../services/swal.service';
import { KategorijeRestService } from './../../services/rest/kategorije-rest.service';
import { Component, OnInit, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-admin-kategorije',
  templateUrl: './admin-kategorije.component.html',
  styleUrls: ['./admin-kategorije.component.scss']
})
export class AdminKategorijeComponent implements OnInit {
  @ViewChild('editKategorijuBtn', { static: false }) editKategorijuBtn;
  doneLoading = false;
  searchInput = '';
  kategorije: any[] = [];
  selectedKategorija: any = {};

  constructor(
    private kategorijeRestService: KategorijeRestService,
    private swal: SwalService
  ) { }

  ngOnInit() {
    this.kategorijeRestService.getAll()
      .subscribe(data => {
        this.kategorije = data;
        this.doneLoading = true;
      },
      err => {

      });
  }

  onKategorijaAdded(k) {
    this.kategorije.unshift(k);
    this.swal.ok("Kategorija uspješno kreirana!");
  }

  onKategorijaUpdated(k) {
    var index = this.kategorije.indexOf(this.kategorije.find(x => x.id == k.id));
    if(index > -1) {
      this.kategorije[index] = k;
    }
    this.selectedKategorija = k;
    this.swal.ok("Kategorija uspješno izmijenjena!");
  }

  onKategorijaClick(k) {
    this.selectedKategorija = JSON.parse(JSON.stringify(k));
    this.editKategorijuBtn.nativeElement.click();
  }

  onDelete(k, e) {
    e.stopPropagation();
    this.swal.confirmDelete(
      () => {
        this.kategorijeRestService.delete(k)
          .subscribe(data => {
            this.kategorije = this.kategorije.filter(x => x.id != k.id);
            this.swal.ok("Kategorija obrisana!");
          },
          err => {
            this.swal.err("Greška prilikom brisanja!");
          });
      },
      () => { }
    )
  }
}
