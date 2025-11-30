import { APIRequestContext } from '@playwright/test';
import { apiConfig } from '../../config/api.config';

export class AuthPage {
  private baseURL = apiConfig.dummyjson.baseURL;
  
  constructor(private request: APIRequestContext) {}

  static readonly VALID_CREDENTIALS = {
    username: 'emilys',
    password: 'emilyspass'
  };

  static readonly INVALID_CREDENTIALS = {
    username: 'invalid',
    password: 'wrongpass'
  };

  login(data: { username: string; password: string }) {
    return this.request.post(`${this.baseURL}/auth/login`, {
      data
    });
  }

  loginWithValidCredentials() {
    return this.login(AuthPage.VALID_CREDENTIALS);
  }

  refreshToken(refreshToken: string) {
    return this.request.post(`${this.baseURL}/auth/refresh`, {
      data: {
        refreshToken
      }
    });
  }

  getAuthenticatedUser(accessToken: string) {
    return this.request.get(`${this.baseURL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
  }
    accesProtectedEndpointWithotToken() {
    return this.request.get(`${this.baseURL}/auth/me`, {
     
      
    });
  }
}

