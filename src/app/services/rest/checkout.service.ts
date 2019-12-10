import { HttpService } from './../http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpService) { }

  getById(id): Observable<any>{
    return this.http.get('checkout/details', id);
  }

  insertRacun(data): Observable<any>{
    return this.http.post('checkout', data);
  }

  getUser(id): Observable<any>{
    return this.http.get('checkout/user', id);
  }
}
