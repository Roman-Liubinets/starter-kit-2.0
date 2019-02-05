import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-edit-dialog.component.html',
  styleUrls: ['./add-edit-dialog.component.scss'],
})
export class AddEditDialogComponent implements OnInit {
  form: FormGroup;
  add = false;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddEditDialogComponent>,
    private store: Store<fromStore.MainPageState>,
  ) {}

  ngOnInit() {
    this.checkOpenDialogAction();
    this.formInit();
  }

  formInit() {
    if (this.add) {
      this.form = this.fb.group({
        first: ['', [Validators.required]],
        last: ['', [Validators.required]],
        something: ['', [Validators.required]],
      });
    } else if (!this.add) {
      this.form = this.fb.group({
        id: [this.data._id],
        first: [this.data.first, [Validators.required]],
        last: [this.data.last, [Validators.required]],
        something: [this.data.something, [Validators.required]],
      });
    }
  }

  private checkValidation(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();
    });
  }

  send() {
    this.checkValidation(this.form);
    if (this.form.valid) {
      if (this.add) {
        this.store.dispatch(new fromStore.AddItem(this.form.value));
        this.closeDialog();
      } else if (!this.add) {
        this.store.dispatch(new fromStore.EditItem(this.form.value));
        this.closeDialog();
      }
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  checkOpenDialogAction() {
    this.data ? (this.add = false) : (this.add = true);
  }
}
