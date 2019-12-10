import { SwalService } from 'src/app/services/swal.service';
import { AuthService } from 'src/app/services/auth.service';
import { ArtikliRestService } from './../../services/rest/artikli-rest.service';
import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, AfterViewInit {
  products: any[] = [];

  constructor(private elementRef:ElementRef, private artikliRestService: ArtikliRestService,
    public auth: AuthService, private swal: SwalService
    ) {};

  ngOnInit() {
    this.swal.showLoading("Učitavanje...", false);
    this.artikliRestService.getAll()
      .subscribe(data => {
        this.products = data;
        this.swal.hideLoading();
      });
  }


  ngAfterViewInit() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../../../assets/template/dist/js/pages/dashboard.js";
    this.elementRef.nativeElement.appendChild(s);
  }

}
