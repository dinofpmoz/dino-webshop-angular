import { AuthService } from 'src/app/services/auth.service';
import { CheckoutService } from 'src/app/services/rest/checkout.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pregled-racuna',
  templateUrl: './pregled-racuna.component.html',
  styles: []
})
export class PregledRacunaComponent implements OnInit {
  racuni: any = [];

  constructor(
    private checkoutService: CheckoutService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.checkoutService.getUser(this.auth.getId()).subscribe(
      data => {
        this.racuni = data;
      },
      err => {}
    );
  }

  onRacunClick() {

  }

  onDetalji(r) {
    this.router.navigate(['/pregled-racuna/' + r.id]);
  }


  onDelete(r, e) {

  }
}
