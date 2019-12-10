import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  API_LINK = 'https://dino-webshop-rest.herokuapp.com/api'; // https://dino-webshop-rest.herokuapp.com/api
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getAll(table) {
    return this.http.get(this.API_LINK + '/' + table);
  }

  get(table, id) {
    return this.http.get(this.API_LINK + '/' + table + '/' + id, this.options);
  }

  post(table, data) {
    return this.http.post(this.API_LINK + '/' + table, JSON.stringify(data), this.options);
  }

  put(table, data, id) {
    return this.http.put(this.API_LINK + '/' + table + '/' + id, JSON.stringify(data), this.options);
  }

  delete(table, id) {
    return this.http.delete(this.API_LINK + '/' + table + '/' + id, this.options);
  }
}
