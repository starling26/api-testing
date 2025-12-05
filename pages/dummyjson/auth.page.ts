import { APIRequestContext } from '@playwright/test';
import { apiConfig } from '../../config/api.config';

export class AuthPage {


  constructor(private request: APIRequestContext) {}

   login(credentials: { username: string; password: string }) {
    return  this.request.post('/auth/login', {
      data: credentials
    });
  }
  
   nullLogin(credentials: { username: null; password: null }) {
    return  this.request.post('/auth/login', {
      data: credentials
    });
  }

   loginWithValidCredentials(credentials: { username: string; password: string }) {
    return  this.login(credentials);
  }

  accessProtectedEndpointWithInvalidToken(invalidToken: string) {
    return  this.request.get('/auth/me', {
      headers: {
        Authorization: `Bearer ${invalidToken}`
      }
    });
  }

   refreshToken(refreshToken: string) {
    return  this.request.post('/auth/refresh', {
      data: {
        refreshToken
      }
    });
  }

  refreshTokenWithInvalidToken(invalidToken: string) {
    return  this.request.post('/auth/refresh', {
      headers: {
        Authorization: `Bearer ${invalidToken}`
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
