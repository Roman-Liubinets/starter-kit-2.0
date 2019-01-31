import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
      console.log(this.form.value);
      this.mainPageService.createItem(this.form.value).subscribe(() => {
        return;
      });
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
