import { test as base } from '@playwright/test';
import { ProductsPage } from '../../pages/dummyjson/products.page';

export type MyFixtures = {
  products: ProductsPage;
};

export const test = base.extend<MyFixtures>({
  products: async ({ request }, use) => {
    const products = new ProductsPage(request);
    await use(products);
  }
});

export { expect } from '@playwright/test';