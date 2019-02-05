import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { map, mergeMap, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

import * as mainPageActions from '../action/main-page.actions';

import { MainPageService } from '../../services/main-page.service';

@Injectable()
export class MainPageEffects {
  constructor(
    private actions$: Actions,
    private mainPageService: MainPageService,
  ) {}
  // ---------------------------------------------------------
  // Load items Actions
  // ---------------------------------------------------------
  @Effect()
  load_item$ = this.actions$.ofType(mainPageActions.LOAD_ITEM).pipe(
    switchMap(() => {
      return this.mainPageService.getItems().pipe(
        map(items => new mainPageActions.LoadItemSuccess(items)),
        catchError(error => of(new mainPageActions.LoadItemFail(error))),
      );
    }),
  );

  @Effect()
  add_item$ = this.actions$.ofType(mainPageActions.ADD_ITEM).pipe(
    map((action: mainPageActions.AddItem) => action.payload),
    switchMap(item => {
      return this.mainPageService.createItem(item).pipe(
        map(item_response => new mainPageActions.AddItemSuccess(item_response)),
        catchError(error => of(new mainPageActions.AddItemFail(error))),
      );
    }),
  );

  @Effect()
  edit_item$ = this.actions$.ofType(mainPageActions.EDIT_ITEM).pipe(
    map((action: mainPageActions.EditItem) => action.payload),
    switchMap(item => {
      return this.mainPageService.editItem(item).pipe(
        map(item_response => new mainPageActions.EditItemSuccess()),
        catchError(error => of(new mainPageActions.EditItemFail(error))),
      );
    }),
  );
}
