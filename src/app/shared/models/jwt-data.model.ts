import { Profile } from './profile.model';

export interface JwtData {
  expiryDate: Date;
  profile: Profile;
  exp?: number;
}
