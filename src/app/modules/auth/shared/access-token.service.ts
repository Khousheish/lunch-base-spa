import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as jwtDecode from 'jwt-decode';
import * as moment from 'moment';
import { CookieService } from 'ngx-cookie-service';

import { AuthRoutes, ModuleRoutes } from '@Enums/routes.enum';
import { TokenKeys } from '@Enums/tokens.enum';
import { JwtData } from '@Models/jwt-data.model';
import { Profile } from '@Models/profile.model';

@Injectable()
export class AccessTokenService {
  public get profile(): Profile | undefined {
    return this.accessTokenData?.profile;
  }

  public accessTokenData: JwtData | undefined = undefined;

  public constructor(
    private readonly router: Router,
    private readonly cookieService: CookieService,
  ) {
  }

  public isLoggedIn(): boolean {
    return !!this.getAccessToken();
  }

  public decodeAccessToken(accessToken: string): void {
    const decodedAccessToken: JwtData = jwtDecode.default(accessToken);

    this.accessTokenData = {
      profile: decodedAccessToken.profile,
      expiryDate: moment.unix(<number>decodedAccessToken.exp).toDate(),
    };
  }

  public setAccessToken(accessToken: string): void {
    this.cookieService.set(TokenKeys.JwtCookie, accessToken, this.accessTokenData?.expiryDate, '/');
  }

  public deleteAccessToken(): void {
    this.cookieService.delete(TokenKeys.JwtCookie, '/');

    this.router.navigate([ModuleRoutes.Auth, AuthRoutes.SignIn]);
  }

  public getAccessToken(): string {
    return this.cookieService.get(TokenKeys.JwtCookie);
  }
}
