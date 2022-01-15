import { createSelector, DefaultProjectorFn, MemoizedSelector } from '@ngrx/store';

import { State } from '@Models/store.model';

import { User } from '../shared/models/user.model';

export const selectPending: (state: State) => boolean = (state: State): boolean => state.shared.user.pending;
export const selectUser: (state: State) => User = (state: State): User => <User>state.shared.user?.user;

export const selectUserSelector: MemoizedSelector<State, User, DefaultProjectorFn<User>> = (
  createSelector(
    selectUser,
    (user: User): User => user,
));

export const selectPendingSelector: MemoizedSelector<State, boolean, DefaultProjectorFn<boolean>> = (
  createSelector(
    selectPending,
    (pending: boolean): boolean => pending,
));
