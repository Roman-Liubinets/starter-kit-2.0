import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MainPageService {
  constructor(private http: HttpClient) {}

  createItem(form_data) {
    return this.http.post('http://localhost:8081/api/item', form_data);
  }

  getItems() {
    return this.http.get('http://localhost:8081/api/items');
  }
}
