import { APIRequestContext } from '@playwright/test';
import { apiConfig } from '../../config/api.config';

export class AuthPage {


  constructor(private request: APIRequestContext) {}

   login(credentials: { username: string; password: string }) {
    return  this.request.post('/auth/login', {
      data: credentials
    });
  }

   loginWithValidCredentials(credentials: { username: string; password: string }) {
    return  this.login(credentials);
  }

   refreshToken(refreshToken: string) {
    return  this.request.post('/auth/refresh', {
      data: {
        refreshToken
      }
    });
  }

  getAuthenticatedUser(accessToken: string) {
    return  this.request.get('/auth/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
  }

     accessProtectedEndpointWithoutToken() {
       return this.request.get('/auth/me');
    }
  }
