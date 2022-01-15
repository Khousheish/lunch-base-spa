import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from '@Models/store.model';
import { User } from '@Modules/user/shared/models/user.model';

import { setUser } from './user.actions';
import { selectPendingSelector, selectUserSelector } from './user.selectors';

@Injectable()
export class UserFacade {
  public readonly user$: Observable<User> = this.store.select(selectUserSelector);
  public readonly userPending$: Observable<boolean> = this.store.select(selectPendingSelector);

  public constructor(
    private readonly store: Store<State>,
  ) {
  }

  public setUser(user: User): void {
    this.store.dispatch(setUser({user}));
  }
}
