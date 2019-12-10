import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { SwalService } from 'src/app/services/swal.service';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: any[] = [
    {email: 'zeljko94@gmail.com', password: 'asd123', role: 'user'},
    {email: 'admin@gmail.com', password: 'asd123', role: 'admin'},
  ];
  user: any;

  constructor(
    private router: Router,
    private http: HttpService,
    private swal: SwalService,
    private shoppingCartService: ShoppingCartService
  ) { }

  requestLogin(email, password) {
    this.swal.showLoading("Logging in...", false);
    this.http.post('users/login', {email: email, password: password})
      .subscribe(data => {
        this.user = data;
        this.set(this.user);
        //alert('Uspješna prijava!');
        this.swal.hideLoading();
        this.router.navigate(['/']);
      },
      err => {
        this.swal.err("Greška prilikom logiranja!");
        this.swal.hideLoading();
      });
  }

  isAdmin() {
    let user = this.get();
    if(user) {
      if(user.role && (user.role == 'admin')) {
        return true;
      }
    }
  }

  getId() {
    let user = this.get();
    if(user) {
      return user.id;
    }
  }

  checkSession() {
    let user = this.get();
    if(user) {
      this.user = user;
      this.router.navigate(['/']);
    }
  }

  get() {
    return JSON.parse(localStorage.getItem('user'));
  }

  set(user) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout() {
    localStorage.setItem('user', null);
    this.user = null;
    this.router.navigate(['/login']);
    this.shoppingCartService.isprazni();
  }
}
