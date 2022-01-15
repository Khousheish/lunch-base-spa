
import { createSelector, DefaultProjectorFn, MemoizedSelector } from '@ngrx/store';

import { State } from '@Models/store.model';

export const selectPending: (state: State) => boolean = (state: State): boolean => <boolean>state.auth?.pending;

export const selectAuthPending: MemoizedSelector<State, boolean, DefaultProjectorFn<boolean>> = createSelector(
  selectPending,
  (pending: boolean): boolean => pending,
);
