import { User } from '../shared/models/user.model';

export interface UserState {
  user: User | null;
  pending: boolean;
  // tslint:disable-next-line: no-any
  error: any; // to be fixed
}
