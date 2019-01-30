import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  registerUser(form_data) {
    console.log('TCL: AuthService -> registerUser -> form_data', form_data);
    return this.http.post('http://localhost:8081/api/user', form_data);
  }

  login(email) {
    return this.http.get(`http://localhost:8081/api/email-user/${email}`);
  }
}
