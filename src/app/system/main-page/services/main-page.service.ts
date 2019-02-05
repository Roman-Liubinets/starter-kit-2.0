import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { map } from 'rxjs/operators';

import { LoadedItem } from '../models/main-page.models';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MainPageService {
  updateItems: Subject<any> = new Subject();
  constructor(private http: HttpClient) {}

  createItem(form_data) {
    return this.http.post('http://localhost:8081/api/item', form_data).pipe(
      map(res => {
        this.updateItems.next();
        return res;
      }),
    );
  }
  editItem(form_data) {
    return this.http.put('http://localhost:8081/api/item', form_data).pipe(
      map(res => {
        this.updateItems.next();
        return res;
      }),
    );
  }

  removeItem(id) {
    return this.http.delete(`http://localhost:8081/api/item/${id}`).pipe(
      map(res => {
        this.updateItems.next();
        return res;
      }),
    );
  }

  getItems(): Observable<LoadedItem[]> {
    return this.http
      .get<LoadedItem[]>('http://localhost:8081/api/items')
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
