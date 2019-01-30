import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { AddDialogComponent } from './dialogs/add-dialog/add-dialog.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  openAddDialog() {
    this.dialog.open(AddDialogComponent, {
      panelClass: 'add-item',
      data: null,
      disableClose: true,
    });
  }
}
