import { test as base, request, expect } from "@playwright/test";
import { CartsPage } from "../../pages/dummyjson/carts.page";

export type CartsFixtures = {
  carts: CartsPage;
};

export const test = base.extend<{ carts: CartsPage }>({
  carts: async ({}, use) => {
    const apiContext = await request.newContext({
      
    });

    const cartsPage = new CartsPage(apiContext);

    await use(cartsPage);

    await apiContext.dispose();
  }
});

export { expect };
