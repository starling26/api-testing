import { test as base, request } from "@playwright/test";
import { AuthPage } from "../../pages/dummyjson/auth.page";
import { apiConfig } from "../../config/api.config";
import { AuthData } from "../../testData/auth.data";

export const test = base.extend<{
  auth: AuthPage;
  authData: typeof AuthData.auth;
  authToken: string;
  authResponse: any;
}>({

  authData: async ({}, use) => {
    await use(AuthData.auth);
  },

  auth: async ({}, use) => {
    const apiContext = await request.newContext({
      baseURL: apiConfig.dummyjson.baseURL,
    });

    const authPage = new AuthPage(apiContext);
    await use(authPage);

    await apiContext.dispose();
  },

  authToken: async ({ auth, authData }, use) => {
    const response = await auth.login(authData.validCredentials);
    const body = await response.json();
    await use(body.accessToken);
  },

  authResponse: async ({ auth, authData }, use) => {
    const response = await auth.login(authData.validCredentials);
    const body = await response.json();
    await use(body);
  }
});

export { expect } from "@playwright/test";