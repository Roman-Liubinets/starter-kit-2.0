import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
  selector: 'app-remove-dialog',
  templateUrl: './remove-dialog.component.html',
  styleUrls: ['./remove-dialog.component.scss'],
})
export class RemoveDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<RemoveDialogComponent>,
    private store: Store<fromStore.MainPageState>,
  ) {}

  ngOnInit() {}

  removeItem() {
    this.store.dispatch(new fromStore.RemoveItem(this.data));
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
