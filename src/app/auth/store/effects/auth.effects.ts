import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, mergeMap, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

import * as authActions from '../action/auth.actions';

import { AuthService } from '../../services/auth.service';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  // ---------------------------------------------------------
  // Login Actions
  // ---------------------------------------------------------
  @Effect()
  login$ = this.actions$.ofType(authActions.LOGIN).pipe(
    map((action: authActions.Login) => action.payload),
    switchMap(loadObj => {
      return this.authService.login(loadObj).pipe(
        map((login_data: any) => new authActions.LoginSuccess(login_data.Data)),
        catchError(error => of(new authActions.LoginFail(error))),
      );
    }),
  );
}
