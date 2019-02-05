import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromStore from './store/index';

import { MainPageService } from './services/main-page.service';
import { AddEditDialogComponent } from './dialogs/add-edit-dialog/add-dialog.component';
import { RemoveDialogComponent } from './dialogs/remove-dialog/remove-dialog.component';

import * as mainPageModels from './models/main-page.models';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  items$: Observable<mainPageModels.LoadedItem[]>;

  constructor(
    private dialog: MatDialog,
    private mainPageService: MainPageService,
    private store: Store<fromStore.MainPageState>,
  ) {}

  ngOnInit() {
    this.items$ = this.store.select<any>(fromStore.getAllItems);
    this.store.dispatch(new fromStore.LoadItem());
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddEditDialogComponent, {
      panelClass: 'add-item',
      data: null,
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.store.dispatch(new fromStore.LoadItem());
    });
  }

  openEditDialog(item) {
    const dialogRef = this.dialog.open(AddEditDialogComponent, {
      panelClass: 'add-item',
      data: item,
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.store.dispatch(new fromStore.LoadItem());
    });
  }

  openRemoveDialog(item) {
    const dialogRef = this.dialog.open(RemoveDialogComponent, {
      panelClass: 'remove-item',
      data: item,
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.store.dispatch(new fromStore.LoadItem());
    });
  }
}
