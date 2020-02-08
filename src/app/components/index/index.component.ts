import { SwalService } from 'src/app/services/swal.service';
import { AuthService } from 'src/app/services/auth.service';
import { ArtikliRestService } from './../../services/rest/artikli-rest.service';
import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { DataStoreService } from 'src/app/services/data-store.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, AfterViewInit {
  searchInput = '';
  sortSelect  = '0';

  constructor(private elementRef:ElementRef, public store: DataStoreService,
    public auth: AuthService, private swal: SwalService
    ) {};

  ngOnInit() {
  }

  resetFiltersBtnClick() {
    this.searchInput = '';
    this.sortSelect  = '0';
    this.store.reset();
  }

  searchInputOnKeyUp(e) {
    this.store.searchInputOnKeyUp(e.target.value);
  }

  onSortSelectChange(sort)  {
    this.store.onSortSelectChange(sort);
  }

  ngAfterViewInit() {
    const s  = document.createElement('script');
    s.type = 'text/javascript';
    s.src  = '../../../assets/template/dist/js/pages/dashboard.js';
    this.elementRef.nativeElement.appendChild(s);
  }

}
