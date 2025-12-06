import { test as base, request, expect } from "@playwright/test";
import { QuotesPage } from "../../pages/dummyjson/quotes.page";
import { apiConfig } from "../../config/api.config";

export const test = base.extend<{ quotes: QuotesPage }>({
  quotes: async ({}, use) => {
    const apiContext = await request.newContext({
      baseURL: apiConfig.dummyjson.baseURL
    });

    const quotesPage = new QuotesPage(apiContext);
    await use(quotesPage);
    await apiContext.dispose();
  }
});

export { expect };
