import { Action } from '@ngrx/store';
import * as fromMPModels from '../../models/main-page.models';

export const LOAD_ITEM = '[MP] Load item';
export const LOAD_ITEM_SUCCESS = '[MP] Load item Success';
export const LOAD_ITEM_FAIL = '[MP] Load item Fail';

export class LoadItem implements Action {
  readonly type = LOAD_ITEM;
}

export class LoadItemSuccess implements Action {
  readonly type = LOAD_ITEM_SUCCESS;
  constructor(public payload: fromMPModels.LoadedItem[]) {}
}

export class LoadItemFail implements Action {
  readonly type = LOAD_ITEM_FAIL;
  constructor(public payload: any) {}
}
// -------------------------------------------------------
// Add Item
// -------------------------------------------------------

export const ADD_ITEM = '[MP] Add item';
export const ADD_ITEM_SUCCESS = '[MP] Add item Success';
export const ADD_ITEM_FAIL = '[MP] Add item Fail';

export class AddItem implements Action {
  readonly type = ADD_ITEM;
  constructor(public payload: fromMPModels.LoadedItem) {}
}
export class AddItemSuccess implements Action {
  readonly type = ADD_ITEM_SUCCESS;
  constructor(public payload: fromMPModels.LoadedItem) {}
}
export class AddItemFail implements Action {
  readonly type = ADD_ITEM_FAIL;
  constructor(public payload: any) {}
}
// -------------------------------------------------------
// Edit Item
// -------------------------------------------------------
export const EDIT_ITEM = '[MP] Edit item';
export const EDIT_ITEM_SUCCESS = '[MP] Edit Success';
export const EDIT_ITEM_FAIL = '[MP] Edit Fail';

export class EditItem implements Action {
  readonly type = EDIT_ITEM;
  constructor(public payload: fromMPModels.LoadedItem) {}
}
export class EditItemSuccess implements Action {
  readonly type = EDIT_ITEM_SUCCESS;
}
export class EditItemFail implements Action {
  readonly type = EDIT_ITEM_FAIL;
  constructor(public payload: any) {}
}
// -------------------------------------------------------
// Remove Item
// -------------------------------------------------------
export const REMOVE_ITEM = '[MP] Remove item';
export const REMOVE_ITEM_SUCCESS = '[MP] Remove Success';
export const REMOVE_ITEM_FAIL = '[MP] Remove Fail';

export class RemoveItem implements Action {
  readonly type = REMOVE_ITEM;
  constructor(public payload: fromMPModels.LoadedItem) {}
}
export class RemoveItemSuccess implements Action {
  readonly type = REMOVE_ITEM_SUCCESS;
}
export class RemoveItemFail implements Action {
  readonly type = REMOVE_ITEM_FAIL;
  constructor(public payload: any) {}
}

export type MainPageActions =
  | LoadItem
  | LoadItemSuccess
  | LoadItemFail
  | AddItem
  | AddItemSuccess
  | AddItemFail
  | EditItem
  | EditItemSuccess
  | EditItemFail
  | RemoveItem
  | RemoveItemSuccess
  | RemoveItemFail;
