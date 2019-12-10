import { HttpService } from './../http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersRestService {
  table = 'users';
  constructor(private http: HttpService) { }


  getAll(): Observable<any> {
    return this.http.getAll(this.table);
  }

  get(id): Observable<any> {
    return this.http.get(this.table, id);
  }

  insert(user): Observable<any> {
    return this.http.post(this.table, user);
  }

  update(user, id): Observable<any> {
    return this.http.put(this.table, user, id);
  }

  delete(user): Observable<any> {
    return this.http.delete(this.table, user.id);
  }
}
