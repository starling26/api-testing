import { test as base, request, expect } from "@playwright/test";
import { ProductsPage } from "../../pages/dummyjson/products.page";

export const test = base.extend<{ products: ProductsPage }>({
  products: async ({}, use) => {
    const apiContext = await request.newContext();

    const productsPage = new ProductsPage(apiContext);

    await use(productsPage);

    await apiContext.dispose();
  }
});
export { expect };

