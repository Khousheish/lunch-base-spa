import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, CreateEffectMetadata, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { ModuleRoutes } from '@Enums/routes.enum';
import { SetUserActionType } from '@Modules/user/shared/types/action.types';
import { setUser } from '@Modules/user/store/user.actions';

import { User } from '../../user/shared/models/user.model';
import { AccessTokenService } from '../shared/access-token.service';
import { AuthRepository } from '../shared/auth.repository';
import { SignInProps } from '../shared/models/action-props.model';
import { AuthResponse } from '../shared/models/auth-response.model';
import { SignInSuccessActionType } from '../shared/types/action.types';
import { AuthActionsTypes, signInSuccess } from './auth.actions';

@Injectable()
export class AuthEffects {

  public signIn$: CreateEffectMetadata = createEffect(
    (): Observable<SignInSuccessActionType> => (
      this.actions$
        .pipe(
          ofType(AuthActionsTypes.SignIn),
          switchMap((action: SignInProps): Observable<AuthResponse> => this.authRepository.signIn(action.signInDetails)),
          map(({accessToken}: AuthResponse): string => accessToken),
          tap(this.accessTokenService.decodeAccessToken.bind(this.accessTokenService)),
          tap(this.accessTokenService.setAccessToken.bind(this.accessTokenService)),
          map((): User => <User>this.accessTokenService.profile),
          map((user: User): SignInSuccessActionType => signInSuccess({ user })),
        )
    ),
  );

  public signInSuccess$: CreateEffectMetadata = createEffect(
    (): Observable<SetUserActionType> => (
      this.actions$
        .pipe(
          ofType(AuthActionsTypes.SignInSuccess),
          map((user: any): any => setUser({user: user.user})),
          tap((): void => {
            this.router.navigate([]);
          }),
        )
    ),
  );

  public constructor(
    private readonly actions$: Actions,
    private readonly authRepository: AuthRepository,
    private readonly router: Router,
    private readonly accessTokenService: AccessTokenService,
  ) {
  }
}
