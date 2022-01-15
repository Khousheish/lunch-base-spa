import { TypedActionProps } from '@Types/action.types';

import { AuthActionsTypes } from '../../store/auth.actions';
import { SignInSuccessProps } from '../models/action-props.model';

export type SignInSuccessActionType = TypedActionProps<AuthActionsTypes.SignInSuccess, SignInSuccessProps>;
