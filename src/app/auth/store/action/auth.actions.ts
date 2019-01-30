import { Action } from '@ngrx/store';
import * as fromAuthModels from '../../models/auth.model';

// ---------------------------------------------------------
// User Login
// ---------------------------------------------------------
export const LOGIN = '[Auth] Login';
export const LOGIN_SUCCESS = '[Auth] Login Success';
export const LOGIN_FAIL = '[Auth] Login Fail';

export class Login implements Action {
  readonly type = LOGIN;
  constructor(public payload: fromAuthModels.Login) {}
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export class LoginFail implements Action {
  readonly type = LOGIN_FAIL;
  constructor(public payload: any) {}
}
// ---------------------------------------------------------
// User Registration
// ---------------------------------------------------------
export const REGISTRATION = '[Auth] Registration';
export const REGISTRATION_SUCCESS = '[Auth] Registration Success';
export const REGISTRATION_FAIL = '[Auth] Registration Fail';

export class Registration implements Action {
  readonly type = REGISTRATION;
  constructor(public payload: fromAuthModels.Registration) {}
}

export class RegistrationSuccess implements Action {
  readonly type = REGISTRATION_SUCCESS;
  constructor(public payload: any) {}
}

export class RegistrationFail implements Action {
  readonly type = REGISTRATION_FAIL;
  constructor(public payload: any) {}
}

export type AuthActions =
  | Login
  | LoginSuccess
  | LoginFail
  | Registration
  | RegistrationSuccess
  | RegistrationFail;
