import { TypedActionProps } from '@Types/action.types';

import { UserActionsTypes } from '../../store/user.actions';
import { SetUserProps } from '../models/action-props.model';

export type SetUserActionType = (
  TypedActionProps<UserActionsTypes.setUser, SetUserProps>
);
