import { test, expect } from '../../fixtures/dummyjson.fixture/recipes.fixture';
import { RecipesData } from '../../testData/recipes.data';

test.describe('DummyJSON Recipes API Tests', () => {

    test('TC-DJ-RECIP-001 - Get All Recipes', async ({ recipes }) => {
        const response = await recipes.getAllRecipes();
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('recipes');
        expect(Array.isArray(responseBody.recipes)).toBe(true);
        expect(responseBody.total).toEqual(RecipesData.expected.totalRecipes);
    });

    test('TC-DJ-RECIP-002 - Get Single Recipe', async ({ recipes }) => {
        const response = await recipes.getRecipeById(RecipesData.ids.valid);
        expect(response.status()).toBe(200);

        const recipe = await response.json();
        expect(recipe).toHaveProperty('id');
        expect(recipe).toHaveProperty('name');
        expect(recipe).toHaveProperty('ingredients');
    });

    test('TC-DJ-RECIP-003 - Search Recipes', async ({ recipes }) => {
        const response = await recipes.searchRecipes(RecipesData.search.valid);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('recipes');
        expect(Array.isArray(responseBody.recipes)).toBe(true);
    });

    test('TC-DJ-RECIP-004 - Limit & Skip recipes', async ({ recipes }) => {
        const response = await recipes.getRecipesWithPagination(
            RecipesData.pagination.limit,
            RecipesData.pagination.skip
        );
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('recipes');
        expect(responseBody.limit).toEqual(RecipesData.pagination.limit);
        expect(responseBody.total).toEqual(RecipesData.expected.totalRecipes);
    });

    test('TC-DJ-RECIP-005 - Sort Recipes', async ({ recipes }) => {
        const response = await recipes.getSortedRecipes(RecipesData.sort.ascending);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('recipes');
        expect(responseBody.total).toEqual(RecipesData.expected.totalRecipes);
        expect(responseBody.recipes.length).toEqual(RecipesData.expected.defaultLimit);
    });

    test('TC-DJ-RECIP-006 - Get All Recipe Tags', async ({ recipes }) => {
        const response = await recipes.getAllTags();
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(Array.isArray(responseBody)).toBe(true);
        expect(responseBody.length).toEqual(RecipesData.expected.totalTags);
    });

    test('TC-DJ-RECIP-007 - Get All Recipes by Tag', async ({ recipes }) => {
        const response = await recipes.getRecipesByTag(RecipesData.tags.pakistani);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('recipes');
        expect(Array.isArray(responseBody.recipes)).toBe(true);
        expect(responseBody.total).toEqual(RecipesData.expected.pakistaniRecipes);
    });

    test('TC-DJ-RECIP-008 - Get All Recipes by Meal', async ({ recipes }) => {
        const response = await recipes.getRecipesByMealType(RecipesData.mealTypes.snack);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('recipes');
        expect(Array.isArray(responseBody.recipes)).toBe(true);
        expect(responseBody.total).toEqual(RecipesData.expected.snackRecipes);
    });

    test('TC-DJ-RECIP-009 - Add Recipe', async ({ recipes }) => {
        const response = await recipes.addRecipe(RecipesData.newRecipe);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('id');
        expect(responseBody).toHaveProperty('ingredients');
        expect(Array.isArray(responseBody.ingredients)).toBe(true);
        expect(responseBody.ingredients.length).toBeGreaterThan(0);
    });

    test('TC-DJ-RECIP-010 - Update Recipe', async ({ recipes }) => {
        const response = await recipes.updateRecipe(
            RecipesData.ids.valid,
            RecipesData.updateRecipe
        );
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('id');
        expect(responseBody).toHaveProperty('name', RecipesData.updateRecipe.name);
        expect(responseBody).toHaveProperty('ingredients');
        expect(Array.isArray(responseBody.ingredients)).toBe(true);
    });

    test('TC-DJ-RECIP-011 - Delete Recipe', async ({ recipes }) => {
        const response = await recipes.deleteRecipe(RecipesData.ids.valid);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody.isDeleted).toBe(true);
    });
});