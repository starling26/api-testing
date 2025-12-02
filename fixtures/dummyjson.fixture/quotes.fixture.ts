import { test as base } from '@playwright/test';
import { QuotesPage } from '../../pages/dummyjson/quotes.page';

export const test = base.extend<{
  quotesPage: QuotesPage;
}>({
  quotesPage: async ({ request }, use) => {
    const quotesPage = new QuotesPage(request);
    await use(quotesPage);
  }
}); 
export { expect } from '@playwright/test';