import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

import { MainPageService } from '../../services/main-page.service';
@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss'],
})
export class AddDialogComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddDialogComponent>,
    private mainPageService: MainPageService,
    private store: Store<fromStore.MainPageState>,
  ) {}

  ngOnInit() {
    this.formInit();
  }

  formInit() {
    this.form = this.fb.group({
      first: ['', [Validators.required]],
      last: ['', [Validators.required]],
      something: ['', [Validators.required]],
    });
  }

  private checkValidation(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();
    });
  }

  send() {
    this.checkValidation(this.form);
    if (this.form.valid) {
      this.store.dispatch(new fromStore.AddItem(this.form.value));
      this.closeDialog();
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
