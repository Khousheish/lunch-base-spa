import { InjectionToken, Provider } from '@angular/core';
import { ActionReducer, ActionReducerMap, combineReducers } from '@ngrx/store';

import { userInitialState, userReducer } from '@Modules/user/store/user.reducers';

import { Reducers, Shared, State } from './shared/models/store.model';

export const initialState: State = {
  shared: {
    user: userInitialState,
  },
};

export const getReducers: () => Reducers = (): Reducers => reducers;

export const getInitialState: () => State = (): State => initialState;

const sharedReducers: ActionReducer<Shared> = combineReducers({
  user: userReducer,
});

export const reducers: Reducers = {
  shared: sharedReducers,
};

export const reducerToken: InjectionToken<ActionReducerMap<State>> = new InjectionToken('Registered Reducers');

export const REDUCER_PROVIDER: Provider = {
  provide: reducerToken,
  useFactory: getReducers,
};
