import { CheckoutService } from 'src/app/services/rest/checkout.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pregled-racuna-detalji',
  templateUrl: './pregled-racuna-detalji.component.html',
  styles: []
})
export class PregledRacunaDetaljiComponent implements OnInit {
  racun: any = {};

  constructor(
    private route: ActivatedRoute,
    private checkoutService: CheckoutService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        const id = +params['id'];
        if(id) {
          this.checkoutService.getById(id)
            .subscribe(data => {
              this.racun = JSON.parse(data.cart_json);
              this.racun.total = data.total;
            });
        }
      }
    );
  }

}
