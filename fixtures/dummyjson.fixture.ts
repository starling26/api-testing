import { test as base } from '@playwright/test';
import { AuthPage } from '../pages/dummyjson/auth.page';

type MyFixtures = {
  authApi: AuthPage;
};

export const test = base.extend<MyFixtures>({
  authApi: async ({ request }, use) => {
    const auth = new AuthPage(request);
    await use(auth);
  }
});

export { expect } from '@playwright/test';