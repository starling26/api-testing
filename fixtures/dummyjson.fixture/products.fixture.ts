import { test as base, request, expect } from "@playwright/test";
import { ProductsPage } from "../../pages/dummyjson/products.page";
import { apiConfig } from "../../config/api.config";

export const test = base.extend<{ products: ProductsPage }>({
  products: async ({}, use) => {
    const apiContext = await request.newContext({
      baseURL: apiConfig.dummyjson.baseURL
    });

    const productsPage = new ProductsPage(apiContext);

    await use(productsPage);

    await apiContext.dispose();
  }
});

export { expect };