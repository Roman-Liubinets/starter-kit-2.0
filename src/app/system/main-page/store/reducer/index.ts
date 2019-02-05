import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';

import * as fromMainPage from './main-page.reducers';

export interface MainPageState {
  items: fromMainPage.MainPageState;
}

export const reducers: ActionReducerMap<MainPageState> = {
  items: fromMainPage.reducer,
};

export const getMainPageFeatureState = createFeatureSelector<MainPageState>(
  'main page',
);

export const getMainPageDataState = createSelector(
  getMainPageFeatureState,
  (state: MainPageState) => state.items,
);
export const getAllItems = createSelector(
  getMainPageDataState,
  fromMainPage.getItems,
);
