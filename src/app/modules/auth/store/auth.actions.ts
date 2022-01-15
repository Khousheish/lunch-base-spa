import { createAction, props } from '@ngrx/store';

import { ActionCreatorPropsType } from '@Types/action.types';

import { SignInProps, SignInSuccessProps } from '../shared/models/action-props.model';

export enum AuthActionsTypes{
  SignIn = '[Auth] SIGN_In',
  SignInSuccess = '[Auth] SIGN_IN_SUCCESS',
}

export const signIn: ActionCreatorPropsType<AuthActionsTypes.SignIn, SignInProps> = createAction(
  AuthActionsTypes.SignIn, props<SignInProps>(),
);

export const signInSuccess: ActionCreatorPropsType<AuthActionsTypes.SignInSuccess, SignInSuccessProps> = createAction(
  AuthActionsTypes.SignInSuccess, props<SignInSuccessProps>(),
);
