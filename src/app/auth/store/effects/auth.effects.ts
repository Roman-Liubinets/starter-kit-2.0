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
    switchMap(loadObg => {
      return this.authService
        .login(loadObg)
        .pipe(
          map((loaded_data: any) => new authActions.LoginSuccess(loaded_data)),
        );
    }),
  );

  // ---------------------------------------------------------
  // Registration Actions
  // ---------------------------------------------------------
  @Effect()
  registration$ = this.actions$.ofType(authActions.REGISTRATION).pipe(
    map((action: authActions.Registration) => action.payload),
    switchMap(loadObg => {
      return this.authService
        .registerUser(loadObg)
        .pipe(
          map(
            (loaded_data: any) =>
              new authActions.RegistrationSuccess(loaded_data),
          ),
        );
    }),
  );
}
