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
    switchMap((item: mainPageActions.AddItem) => {
      return this.mainPageService.createItem(item.payload).pipe(
        map(() => new mainPageActions.AddItemSuccess()),
        catchError(error => of(new mainPageActions.AddItemFail(error))),
      );
    }),
  );
  // add_item$ = this.actions$.ofType(mainPageActions.ADD_ITEM).pipe(
  //   switchMap((data: mainPageActions.AddItem) =>
  //     this.mainPageService
  //       .createItem(data.payload).pipe(
  //               map(added_item => new mainPageActions.AddItemSuccess(added_item)),
  //               catchError(error => of(new mainPageActions.AddItemFail(error))),
  //             );
  //   ),
  // );
  // switchMap((data: projectsActions.AddProject) =>
  //   this.projectsService
  //     .createProject(data.payload)
  //     .map(() => {
  //       return new projectsActions.AddProjectSuccess();
  //     })
  //     .catch(error =>
  //       Observable.of(new projectsActions.AddProjectFail(error)),
  //     ),
  // );
}
