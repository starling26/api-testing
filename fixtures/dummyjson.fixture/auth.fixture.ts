import { test as base, request, expect } from "@playwright/test";
import { AuthPage } from "../../pages/dummyjson/auth.page";
import { AuthData } from "../../testData/positive/auth.data";

type AuthResponse = {
  accessToken: string;
  refreshToken: string;
};

export type AuthFixtures = {
  auth: AuthPage;
  authResponse: AuthResponse;
  authToken: string;
};

export const test = base.extend<AuthFixtures>({
  auth: async ({}, use) => {
    const apiContext = await request.newContext();

    const authPage = new AuthPage(apiContext);

    await use(authPage);

    await apiContext.dispose();
  },

  authResponse: async ({ auth }, use) => {
    const response = await auth.login(AuthData.auth.validCredentials);
    const authResponse: AuthResponse = await response.json();
    await use(authResponse);
  },

  authToken: async ({ authResponse }, use) => {
    await use(authResponse.accessToken);
  }
});

export { expect };