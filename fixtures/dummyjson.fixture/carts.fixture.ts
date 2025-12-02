import { test as base, request, expect } from "@playwright/test";
import { CartsPage } from "../../pages/dummyjson/carts.page";
import { apiConfig } from "../../config/api.config";

export const test = base.extend<{ carts: CartsPage }>({
  carts: async ({}, use) => {
    const apiContext = await request.newContext({
      baseURL: apiConfig.dummyjson.baseURL,
    });

    const cartsPage = new CartsPage(apiContext);
    await use(cartsPage);

    await apiContext.dispose();
  }
});

export { expect };