import { CheckoutService } from 'src/app/services/rest/checkout.service';
import { ArtikliRestService } from './../../services/rest/artikli-rest.service';
import { SwalService } from './../../services/swal.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {
  user: any = {};
  artikli: any = [];
  racuni: any = [];


  constructor(
    private auth: AuthService,
    private artikliRestService: ArtikliRestService,
    private swal: SwalService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.auth.get();
    this.artikliRestService.getForUser(this.user.id)
      .subscribe(data => {
        this.artikli = data;
      });
  }

  dodajArtikl() {
    this.router.navigate(['/dodaj-artikl']);
  }

  ukloni(product) {
    this.artikli = this.artikli.filter(a => a.id != product.id);
  }

  onSaveUserInfo() {

  }

  onResetUserInfo() {
    this.user = this.auth.get();
  }

}
