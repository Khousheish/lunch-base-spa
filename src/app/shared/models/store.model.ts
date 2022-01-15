import { ActionReducer } from '@ngrx/store';

import { AuthState } from '@Modules/auth/store/auth.state';
import { UserState } from '@Modules/user/store/user.state';

export interface LazyModules {
  auth?: AuthState;
}

// tslint:disable-next-line: no-empty-interface
export interface Shared {
  user: UserState;
}

export interface State extends LazyModules {
  shared: Shared;
}

export interface Reducers {
  shared: ActionReducer<Shared>;
}
