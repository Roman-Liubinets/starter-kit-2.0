import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
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
  load_items$ = this.actions$.ofType(mainPageActions.LOAD_ITEM).pipe(
    switchMap(() => {
      return this.mainPageService.getItems().pipe(
        map(items => new mainPageActions.LoadItemSuccess(items)),
        catchError(error => of(new mainPageActions.LoadItemFail(error))),
      );
    }),
  );

  @Effect()
  add_item$ = this.actions$.ofType(mainPageActions.ADD_ITEM).pipe(
    switchMap(item => {
      return this.mainPageService.createItem(item.payload).pipe(
        map(added_item => new mainPageActions.AddItemSuccess(added_item)),
        catchError(error => of(new mainPageActions.AddItemFail(error))),
      );
    }),
  );
}
