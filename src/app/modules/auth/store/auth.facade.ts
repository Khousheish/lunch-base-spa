import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from '@Models/store.model';

import { SignInDetails } from '../shared/models/sign-in-details.model';
import { signIn } from './auth.actions';
import { selectAuthPending } from './auth.selectors';

@Injectable()
export class AuthFacade {
  public pending$: Observable<boolean> = this.store.pipe(select(selectAuthPending));

  public constructor(
    private readonly store: Store<State>,
  ) {
  }

  public signIn(signInDetails: SignInDetails): void {
    this.store.dispatch(signIn({ signInDetails }));
  }
}
