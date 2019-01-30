import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';

import * as fromAuth from './auth.reducers';

export interface AuthState {
  auth_data: fromAuth.AuthState;
}

export const reducers: ActionReducerMap<AuthState> = {
  auth_data: fromAuth.reducer,
};

// -------------------------------------------------------
// Auth State
// -------------------------------------------------------
export const getAuthFeatureState = createFeatureSelector<AuthState>('auth');

export const getAuthDataState = createSelector(
  getAuthFeatureState,
  (state: AuthState) => state.auth_data,
);

export const authLoading = createSelector(
  getAuthDataState,
  fromAuth.getAuthLoading,
);

export const getLoaded = createSelector(
  getAuthDataState,
  fromAuth.getAuthLoaded,
);
