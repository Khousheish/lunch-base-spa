import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_ENDPOINTS } from '@Consts/api.const';
import { environment } from '@Environment';

import { AuthResponse } from './models/auth-response.model';
import { SignInDetails } from './models/sign-in-details.model';

@Injectable()
export class AuthRepository {

  public constructor(
    private readonly httpClient: HttpClient,
  ) {
  }

  public signIn(signInDetails: SignInDetails): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(
      `${environment.apiUrl}/${API_ENDPOINTS.auth.root}/${API_ENDPOINTS.auth.signIn}`,
      signInDetails,
    );
  }
}
