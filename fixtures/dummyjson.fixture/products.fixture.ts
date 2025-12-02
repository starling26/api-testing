import { test as base, request, expect } from "@playwright/test";
import { AuthPage } from "../../pages/dummyjson/auth.page";
import { apiConfig } from "../../config/api.config";
import { AuthData } from "../../testData/auth.data";

export const test = base.extend<{
  apiContext: any;
  auth: AuthPage;
  authData: typeof AuthData.auth;
  authToken: string;
  authResponse: any;
}>({

  apiContext: async ({}, use) => {
    const context = await request.newContext({
      baseURL: apiConfig.dummyjson.baseURL
    });

    await use(context);

    await context.dispose();
  },

  // Test Data
  authData: async ({}, use) => {
    await use(AuthData.auth);
  },

  // Page Object que usa apiContext
  auth: async ({ apiContext }, use) => {
    const authPage = new AuthPage(apiContext);
    await use(authPage);
  },

  // Token
  authToken: async ({ auth, authData }, use) => {
    const response = await auth.login(authData.validCredentials);
    const body = await response.json();
    await use(body.accessToken);
  },

  // Respuesta completa del login
  authResponse: async ({ auth, authData }, use) => {
    const response = await auth.login(authData.validCredentials);
    const body = await response.json();
    await use(body);
  }
});

export { expect };