import * as authActions from '../action/auth.actions';
import * as authModels from '../../models/auth.model';

export interface AuthState {
  login_data: authModels.Login;
  email: string;
  registration_data: authModels.Registration;
  // login_response_data: authModels.Login;
  // registration_response_data: authModels.Registration;
  login_response_data: {};
  registration_response_data: {};
  loaded: boolean;
  loading: boolean;
}

export const initialState: AuthState = {
  login_data: {
    Email: '',
    Password: '',
  },
  email: '',
  registration_data: {
    Email: '',
    Password: '',
  },
  login_response_data: {},
  registration_response_data: {},
  loaded: false,
  loading: true,
};

export function reducer(
  state = initialState,
  action: authActions.AuthActions,
): AuthState {
  switch (action.type) {
    // ---------------------------------------------------------
    // Auth Actions
    // ---------------------------------------------------------
    // ---------------------------------------------------------
    // Login Actions
    // ---------------------------------------------------------
    case authActions.LOGIN: {
      const login_value = action.payload;
      console.log('TCL: login_value', login_value);
      return {
        ...state,
        login_data: login_value,
        loading: true,
        loaded: false,
      };
    }

    case authActions.LOGIN_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        login_response_data: data,
        loading: false,
        loaded: true,
      };
    }

    case authActions.LOGIN_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
    // ---------------------------------------------------------
    // Registration Actions
    // ---------------------------------------------------------
    case authActions.REGISTRATION: {
      const registration_value = action.payload;
      return {
        ...state,
        registration_data: registration_value,
        loading: true,
        loaded: false,
      };
    }

    case authActions.REGISTRATION_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        registration_response_data: data,
        loading: false,
        loaded: true,
      };
    }

    case authActions.REGISTRATION_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
  }
  return state;
}

// ---------------------------------------------------------
// Registration Actions
// ---------------------------------------------------------

export const getAuthLoading = (state: AuthState) => state.loading;
export const getAuthLoaded = (state: AuthState) => state.loaded;
