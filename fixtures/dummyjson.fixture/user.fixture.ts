import { test as base, request, expect} from "@playwright/test";
import { UserPage } from "../../pages/dummyjson/user.page";
import { apiConfig } from "../../config/api.config";
import { UserData } from "../../testData/user.data";


export const test = base.extend<{
  user: UserPage;
  userToken: string;
  userResponse: any;
  authenticatedUserData: any;
}>({

  user: async ({}, use) => {
    const apiContext = await request.newContext({
      baseURL: apiConfig.dummyjson.baseURL,
    });

    const userPage = new UserPage(apiContext);
    await use(userPage);
    await apiContext.dispose();
  },
  
  userToken: async ({ user }, use) => {
    const response = await user.loginUser(UserData.loginCredentials);
    const body = await response.json();
    await use(body.accessToken);
  },

  userResponse: async ({ user }, use) => {
    const response = await user.loginUser(UserData.loginCredentials);
    const body = await response.json();
    await use(body);
  },

  authenticatedUserData: async ({ user, userToken }, use) => {
    const response = await user.getAuthUser(userToken);
    const body = await response.json();
    await use(body);
  }
});

export { expect };