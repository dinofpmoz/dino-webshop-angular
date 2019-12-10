import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { SwalService } from 'src/app/services/swal.service';
import { AuthService } from 'src/app/services/auth.service';
import { CheckoutService } from 'src/app/services/rest/checkout.service';

declare var Stripe: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, AfterViewInit {
  checkoutData: any = {};

  constructor(private elementRef: ElementRef, public shoppingCartService: ShoppingCartService, private swal: SwalService,
    private auth: AuthService, private checkoutService: CheckoutService) { }

  ngAfterViewInit() {


    // Your Stripe public key
    const stripe = Stripe('pk_test_pADaXspdOE0lxXO2OUJxK1UA00EwWrEPZP');

    // Create `card` element that will watch for updates
    // and display error messages
    const elements = stripe.elements();
    const card = elements.create('card');
    card.mount('#card-element');
    card.addEventListener('change', event => {
      const displayError = document.getElementById('card-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    });


    const paymentForm = document.getElementById('payment-form');
    paymentForm.addEventListener('submit', event => {
      event.preventDefault();
      this.swal.showLoading("Processing payment...", false);
      stripe.createToken(card).then(result => {
        if (result.error) {

          this.swal.hideLoading();
          this.swal.err('Error creating payment method!');

          const errorElement = document.getElementById('card-errors');
          errorElement.textContent = result.error.message;
        } else {
          this.swal.hideLoading();
         //console.log('Token acquired!');
         // console.log(result.token);
          //console.log(result.token.id);

          const racun = {
            cart_json: this.shoppingCartService.toJSON(),
            total: this.shoppingCartService.total,
            currency: 'usd',
            user_id: this.auth.user.id,
            stripe_token_id: result.token.id,
            full_name: this.checkoutData.full_name,
            //city: this.checkoutData.city,
            address: this.checkoutData.address
          };

          this.swal.showLoading("Unosim račun...", false);
          this.checkoutService.insertRacun(racun)
            .subscribe(data => {
              this.swal.hideLoading();
              this.swal.ok(data.msg);
              this.shoppingCartService.isprazni();
            },
            err => {
              this.swal.hideLoading();
              this.swal.err(err.message);
            });
        }
      });
    });

  }

  ngOnInit() {
  }

}
