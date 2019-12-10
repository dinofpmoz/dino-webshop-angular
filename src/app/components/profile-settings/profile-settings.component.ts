import { ArtikliRestService } from './../../services/rest/artikli-rest.service';
import { SwalService } from './../../services/swal.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {
  user: any = {};
  artikli: any = [];


  constructor(
    private auth: AuthService,
    private artikliRestService: ArtikliRestService,
    private swal: SwalService
  ) { }

  ngOnInit() {
    this.user = this.auth.get();
    this.artikliRestService.getForUser(this.user.id)
      .subscribe(data => {
        this.artikli = data;
      })
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
