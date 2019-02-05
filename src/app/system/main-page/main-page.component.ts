import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromStore from './store/index';

import { MainPageService } from './services/main-page.service';
import { AddDialogComponent } from './dialogs/add-dialog/add-dialog.component';

import * as mainPageModels from './models/main-page.models';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  items$: Observable<mainPageModels.LoadedItem>;

  constructor(
    private dialog: MatDialog,
    private mainPageService: MainPageService,
    private store: Store<fromStore.MainPageState>,
  ) {}

  ngOnInit() {
    // this.store.dispatch(new fromStore.LoadItem());
    this.items$ = this.store.select<any>(fromStore.getAllItems);
  }

  openAddDialog() {
    this.dialog.open(AddDialogComponent, {
      panelClass: 'add-item',
      data: null,
      disableClose: true,
    });
  }
}
