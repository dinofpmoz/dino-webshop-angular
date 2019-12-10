import { HttpService } from './../http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class KategorijeRestService {
  table = 'kategorije';

  constructor(
    private http: HttpService
  ) { }



  getAll(): Observable<any> {
    return this.http.getAll(this.table);
  }

  get(id): Observable<any> {
    return this.http.get(this.table, id);
  }

  insert(kategorija): Observable<any> {
    return this.http.post(this.table, kategorija);
  }

  update(kategorija, id): Observable<any> {
    return this.http.put(this.table, kategorija, id);
  }

  delete(kategorija): Observable<any> {
    return this.http.delete(this.table, kategorija.id);
  }
}
