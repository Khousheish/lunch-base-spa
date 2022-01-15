import { ActionReducer, createReducer, on } from '@ngrx/store';

import { signIn, signInSuccess } from './auth.actions';
import { AuthState } from './auth.state';

export const authInitialState: AuthState = {
  pending: false,
  error: null, // to be fixed
};

export const authReducer: ActionReducer<AuthState> = createReducer(
  authInitialState,
  on(
    signIn,
    (state: AuthState): AuthState => ({
      ...state,
      pending: true,
    }),
  ),
  on(
    signInSuccess,
    (state: AuthState): AuthState => ({
      ...state,
      pending: false,
    }),
  ),
);
