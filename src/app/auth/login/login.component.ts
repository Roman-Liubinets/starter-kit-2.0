import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Store } from '@ngrx/store';
import * as fromAuth from '../store';

import { AuthService } from '../services/auth.service';
import { Login } from '../models/auth.model';
import { Message } from '../models/message.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  message: Message;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromAuth.AuthState>,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.message = new Message('danger', '');
    this.formInit();
  }
  private showMessage(text: string, type: string = 'danger') {
    this.message = new Message(type, text);
    window.setTimeout(() => {
      this.message.text = '';
    }, 3000);
  }

  formInit() {
    this.form = this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  private checkValidation(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();
    });
  }

  onLogin() {
    this.checkValidation(this.form);
    if (this.form.valid) {
      this.store.dispatch(new fromAuth.Login(this.form.get('Email').value));
      this.store
        .select(fromAuth.getAuthDataState)
        .subscribe((store_data: any) => {
          if (store_data.login_response_data) {
            if (
              store_data.login_response_data.Email ===
              this.form.get('Email').value
            ) {
              if (
                store_data.login_response_data.Password ===
                this.form.get('Password').value
              ) {
              } else {
                this.showMessage('Password incorrect!', 'danger');
              }
            }
          } else {
            this.showMessage('This user does not exist !', 'danger');
          }
        });
    }
  }
}
