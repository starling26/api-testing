import { test as base } from '@playwright/test';
import { RecipesPage } from '../../pages/dummyjson/recipes.page';

export type RecipesFixtures = {
  recipes: RecipesPage;
};

export const test = base.extend<RecipesFixtures>({
  recipes: async ({ request }, use) => {
    const recipes = new RecipesPage(request);
    await use(recipes);
  }
});

export { expect } from '@playwright/test';