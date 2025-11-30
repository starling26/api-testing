import { test as base } from '@playwright/test';
import { userPage } from '../../pages/dummyjson/user.page';

export const userFixtures = {
  VALID_CREDENTIALS: {
    username: 'kminchelle',
    password: '0lelplR'
  },

  INVALID_CREDENTIALS: {
    username: 'invalid',
    password: 'wrongpass'
  }
};

export type userFixtures = {
  user: userPage;
};

export const test = base.extend<userFixtures>({
  user: async ({ request }, use) => {
    const user = new userPage(request);
    await use(user);
  }
});

export const {
  VALID_CREDENTIALS, INVALID_CREDENTIALS
} = userFixtures;

export { expect } from '@playwright/test';