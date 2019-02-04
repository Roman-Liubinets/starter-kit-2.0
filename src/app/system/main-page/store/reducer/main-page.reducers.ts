import * as mainPageActions from '../action/main-page.actions';
import * as mainPageModels from '../../models/main-page.models';

export interface MainPageState {
  items: mainPageModels.LoadedItem;
  loaded: boolean;
  loading: boolean;
}

export const initialState: MainPageState = {
  items: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: mainPageActions.MainPageActions,
): MainPageState {
  switch (action.type) {
    // -------------------------------------------------------
    // Add Item
    // -------------------------------------------------------
    case mainPageActions.ADD_ITEM: {
      return { ...state };
    }
    case mainPageActions.ADD_ITEM_SUCCESS: {
      return { ...state };
    }
    case mainPageActions.ADD_ITEM_FAIL: {
      return { ...state };
    }
    case mainPageActions.LOAD_ITEM: {
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    }
    case mainPageActions.LOAD_ITEM_SUCCESS: {
      // console.log(action.payload);
      return {
        ...state,
        items: action.payload,
        loading: false,
        loaded: true,
      };
    }
    case mainPageActions.LOAD_ITEM_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: true,
      };
    }
  }
  return state;
}

export const getItems = (state: MainPageState) => state.items;
