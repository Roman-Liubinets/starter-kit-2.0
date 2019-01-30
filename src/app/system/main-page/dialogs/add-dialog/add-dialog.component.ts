import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  ) {}

  ngOnInit() {
    this.formInit();
  }

  formInit() {
    this.form = this.fb.group({
      first: ['', [Validators.required, Validators.minLength(1)]],
      last: ['', [Validators.required, Validators.minLength(1)]],
      something: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  private checkValidation(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();
    });
  }

  save() {
    this.checkValidation(this.form);
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
