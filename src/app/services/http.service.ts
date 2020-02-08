import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  API_LINK = 'https://dino-webshop-rest2.herokuapp.com/api'; // https://dino-webshop-rest.herokuapp.com/api
  //API_LINK = 'http://127.0.0.1:8000/api';
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  request(method, link, data=null) {
    if(method == 'get') {
      return this.http.get(link);
    }
    else if(method == 'post') {
      return this.http.post(link, data, this.options);
    }
    else if(method == 'delete') {
      return this.http.delete(link, this.options);
    }
    if(method == 'put') {
      return this.http.put(link, this.options);
    }
  }

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
