import { test as base, request, expect } from "@playwright/test";
import { RecipesPage } from "../../pages/dummyjson/recipes.page";

export const test = base.extend<{ recipes: RecipesPage }>({
  recipes: async ({}, use) => {
    const apiContext = await request.newContext();

    const recipesPage = new RecipesPage(apiContext);
    await use(recipesPage);
    await apiContext.dispose();
  }
});

export { expect };