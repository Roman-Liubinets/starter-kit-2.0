import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.formInit();
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

  onRegister() {
    this.checkValidation(this.form);
    if (this.form.valid) {
      this.authService.registerUser(this.form.value).subscribe((res: any) => {
        console.log('​RegisterComponent -> onRegister -> res', res);
        this.router.navigate(['/login']);
      });
    }
  }
}
