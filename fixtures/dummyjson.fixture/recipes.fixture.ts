import { test as base } from '@playwright/test';
import { recipesPage } from '../../pages/dummyjson/recipes.page';

export type MyFixtures = {
  recipes: recipesPage;
};

export const test = base.extend<MyFixtures>({
  recipes: async ({ request }, use) => {
    const recipes = new recipesPage(request);
    await use(recipes);
  }
});

export { expect } from '@playwright/test';