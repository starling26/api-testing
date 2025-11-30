import { test as base } from '@playwright/test';
import { CartsPage } from '../../pages/dummyjson/carts.page';

export type MyFixtures = {
  carts: CartsPage;
};

export const test = base.extend<MyFixtures>({
  carts: async ({ request }, use) => {
    const products = new CartsPage(request);
    await use(products);
  }
});
export { expect } from '@playwright/test';
