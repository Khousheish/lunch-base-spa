import { createAction, props } from '@ngrx/store';

import { ActionCreatorPropsType } from '@Types/action.types';

import { SetUserProps } from '../shared/models/action-props.model';

export enum UserActionsTypes {
  setUser = '[User] SET_PROFILE',
}

export const setUser: ActionCreatorPropsType<UserActionsTypes.setUser, SetUserProps> =
  createAction(
    UserActionsTypes.setUser,
    props<SetUserProps>(),
  );
