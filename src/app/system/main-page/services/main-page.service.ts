import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { LoadedItem } from '../models/main-page.models';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MainPageService {
  constructor(private http: HttpClient) {}

  createItem(form_data) {
    return this.http.post('http://localhost:8081/api/item', form_data);
  }
  editItem(form_data) {
    return this.http.put('http://localhost:8081/api/item', form_data);
  }

  removeItem(id) {
    return this.http.delete(`http://localhost:8081/api/item/${id}`);
  }

  getItems(): Observable<LoadedItem[]> {
    return this.http
      .get<LoadedItem[]>('http://localhost:8081/api/items')
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
