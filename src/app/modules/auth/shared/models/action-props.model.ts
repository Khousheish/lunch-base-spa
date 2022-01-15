import { User } from '../../../user/shared/models/user.model';
import { SignInDetails } from './sign-in-details.model';

export interface SignInProps {
  signInDetails: SignInDetails;
}

export interface SignInSuccessProps {
  user: User;
}
