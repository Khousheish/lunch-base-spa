import { ActionReducer, createReducer, on } from '@ngrx/store';

import { SetUserActionType } from '../shared/types/action.types';
import { setUser } from './user.actions';
import { UserState } from './user.state';

export const userInitialState: UserState = {
  user: {
    id: 1,
    username: 'kh',
    email: 'kh',
    firstName: 'hk',
    lastName: 'db',
    createdAt: '123',
  },
  pending: false,
  error: null, // to be fixed
};

export const userReducer: ActionReducer<UserState> = createReducer(
  userInitialState,
  on(
    setUser,
    (state: UserState, action: SetUserActionType): UserState => ({
      ...state,
      user: action.user,
      pending: false,
    }),
  ),
);
