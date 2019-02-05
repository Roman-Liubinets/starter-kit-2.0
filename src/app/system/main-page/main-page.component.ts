import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

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
  private sub: Subscription = new Subscription();

  constructor(
    private dialog: MatDialog,
    private mainPageService: MainPageService,
    private store: Store<fromStore.MainPageState>,
  ) {}

  ngOnInit() {
    this.items$ = this.store.select<any>(fromStore.getAllItems);
    this.store.dispatch(new fromStore.LoadItem());
    this.sub.add(
      this.mainPageService.updateItems.subscribe(() =>
        this.store.dispatch(new fromStore.LoadItem()),
      ),
    );
  }

  openAddDialog() {
    this.dialog.open(AddEditDialogComponent, {
      panelClass: 'add-item',
      data: null,
      disableClose: true,
    });
  }

  openEditDialog(item) {
    this.dialog.open(AddEditDialogComponent, {
      panelClass: 'add-item',
      data: item,
      disableClose: true,
    });
  }

  openRemoveDialog(item) {
    this.dialog.open(RemoveDialogComponent, {
      panelClass: 'remove-item',
      data: item,
      disableClose: true,
    });
  }
}
