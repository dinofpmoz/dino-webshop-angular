import { HttpService } from './../http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArtikliRestService {
  table = 'artikli';
  constructor(private http: HttpService) { }


  getAllGrouped() {
    return this.http.getAll(this.table + '/grouped');
  }

  getForUser(userId) {
    return this.http.getAll(this.table + '/getForUser/' + userId);
  }

  getAll(): Observable<any> {
    return this.http.getAll(this.table);
  }

  get(id): Observable<any> {
    return this.http.get(this.table, id);
  }

  insert(artikl): Observable<any> {
    return this.http.post(this.table, artikl);
  }

  update(artikl, id): Observable<any> {
    return this.http.put(this.table, artikl, id);
  }

  delete(artikl): Observable<any> {
    return this.http.delete(this.table, artikl.id);
  }
}
