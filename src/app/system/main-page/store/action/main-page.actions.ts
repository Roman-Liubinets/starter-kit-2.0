import { Action } from '@ngrx/store';
import * as fromMPModels from '../../models/main-page.models';

export const LOAD_ITEM = '[MP] Load item';
export const LOAD_ITEM_SUCCESS = '[MP] Load item Success';
export const LOAD_ITEM_FAIL = '[MP] Load item Fail';

export class LoadItem implements Action {
  readonly type = LOAD_ITEM;
  constructor() {}
}

export class LoadItemSuccess implements Action {
  readonly type = LOAD_ITEM_SUCCESS;
  constructor(public payload: fromMPModels.LoadedItem) {}
}

export class LoadItemFail implements Action {
  readonly type = LOAD_ITEM_FAIL;
  constructor(public payload: fromMPModels.LoadedItem) {}
}

export type MainPageActions = LoadItem | LoadItemSuccess | LoadItemFail;
