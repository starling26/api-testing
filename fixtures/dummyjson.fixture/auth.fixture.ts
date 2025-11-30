import { test as base } from '@playwright/test';
import { AuthPage } from '../../pages/dummyjson/auth.page';

export type AuthFixtures = {
  auth: AuthPage;
};

export const test = base.extend<AuthFixtures>({
  auth: async ({ request }, use) => {
    const auth = new AuthPage(request);
    await use(auth);
  }
});

export { expect } from '@playwright/test';