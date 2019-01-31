import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';

import * as fromMainPage from './main-page.reducers';

export interface MainPageState {
  items: fromMainPage.MainPageState;
}

export const getMainPageFeatureState = createFeatureSelector<MainPageState>(
  'main page',
);

export const getMainPageDataState = createSelector(
  getMainPageFeatureState,
  (state: MainPageState) => state.items,
);
