import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  registerUser(form_data) {
    return this.http.post('http://localhost:8081/api/register/user', form_data);
  }
}
