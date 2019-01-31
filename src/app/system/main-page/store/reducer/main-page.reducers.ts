import * as mainPageActions from '../action/main-page.actions';
import * as mainPageModels from '../../models/main-page.models';

export interface MainPageState {
  items: mainPageModels.LoadedItem;
  loaded: boolean;
  loading: boolean;
}

export const initialState: MainPageState = {
  items: {
    _id: '',
    first: '',
    last: '',
    something: '',
  },
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: mainPageActions.MainPageActions,
): MainPageState {
  switch (action.type) {
    case mainPageActions.LOAD_ITEM: {
      return {
        ...state,
        items: action.payload,
        loading: true,
        loaded: false,
      };
    }
    case mainPageActions.LOAD_ITEM_SUCCESS: {
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