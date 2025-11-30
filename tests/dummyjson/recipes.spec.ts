import { test, expect } from '../../fixtures/dummyjson.fixture/recipes.fixture';
import { RecipestData } from '../../testData/recipes.data';

test.describe('DummyJSON Recipes API Tests', () => {

    test('TC-DJ-RECIP-001 - Get All Recipes', async ({ recipes }) => {
        const response = await recipes.getAllRecipes();
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('recipes');
        expect(Array.isArray(responseBody.recipes)).toBe(true);
        expect(responseBody.total).toEqual(RecipestData.expected.totalRecipes);
    });

    test('TC-DJ-RECIP-002 - Get Single Recipe', async ({ recipes }) => {
        const response = await recipes.getRecipeById(RecipestData.ids.valid);
        expect(response.status()).toBe(200);

        const recipe = await response.json();
        expect(recipe).toHaveProperty('id', RecipestData.ids.valid);
        expect(recipe).toHaveProperty('name');
        expect(recipe).toHaveProperty('ingredients');
    });

    test('TC-DJ-RECIP-003 - Search Recipes', async ({ recipes }) => {
        const response = await recipes.searchRecipes(RecipestData.search.valid);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('recipes');
        expect(Array.isArray(responseBody.recipes)).toBe(true);
    });

    test('TC-DJ-RECIP-004 - Limit & Skip recipes', async ({ recipes }) => {
        const response = await recipes.getRecipesWithPagination(
            RecipestData.pagination.limit,
            RecipestData.pagination.skip
        );
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('recipes');
        expect(responseBody.limit).toEqual(RecipestData.pagination.limit);
        expect(responseBody.total).toEqual(RecipestData.expected.totalRecipes);
    });

    test('TC-DJ-RECIP-005 - Sort Recipes', async ({ recipes }) => {
        const response = await recipes.getSortedRecipes(RecipestData.sort.ascending);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('recipes');
        expect(responseBody.total).toEqual(RecipestData.expected.totalRecipes);
        expect(responseBody.recipes.length).toEqual(RecipestData.expected.defaultLimit);
    });

    test('TC-DJ-RECIP-006 - Get All Recipe Tags', async ({ recipes }) => {
        const response = await recipes.getAllTags();
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(Array.isArray(responseBody)).toBe(true);
        expect(responseBody.length).toEqual(RecipestData.expected.totalTags);
    });

    test('TC-DJ-RECIP-007 - Get All Recipes by Tag', async ({ recipes }) => {
        const response = await recipes.getRecipesByTag(RecipestData.tags.pakistani);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('recipes');
        expect(Array.isArray(responseBody.recipes)).toBe(true);
        expect(responseBody.total).toEqual(RecipestData.expected.pakistaniRecipes);
    });

    test('TC-DJ-RECIP-008 - Get All Recipes by Meal', async ({ recipes }) => {
        const response = await recipes.getRecipesByMealType(RecipestData.mealTypes.snack);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('recipes');
        expect(Array.isArray(responseBody.recipes)).toBe(true);
        expect(responseBody.total).toEqual(RecipestData.expected.snackRecipes);
    });

    test('TC-DJ-RECIP-009 - Add Recipe', async ({ recipes }) => {
        const response = await recipes.addRecipe(RecipestData.newRecipe);
        expect(response.status()).toBe(201);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('id');
        expect(responseBody).toHaveProperty('title', RecipestData.newRecipe.title);
        expect(responseBody).toHaveProperty('description', RecipestData.newRecipe.description);
        expect(responseBody).toHaveProperty('ingredients');
        expect(Array.isArray(responseBody.ingredients)).toBe(true);
        expect(responseBody.ingredients.length).toBeGreaterThan(0);
    });

    test('TC-DJ-RECIP-010 - Update Recipe', async ({ recipes }) => {
        const response = await recipes.updateRecipe(
            RecipestData.ids.valid,
            RecipestData.updateRecipe
        );
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('id');
        expect(responseBody).toHaveProperty('name', RecipestData.updateRecipe.name);
        expect(responseBody).toHaveProperty('ingredients');
        expect(Array.isArray(responseBody.ingredients)).toBe(true);
    });

    test('TC-DJ-RECIP-011 - Delete Recipe', async ({ recipes }) => {
        const response = await recipes.deleteRecipe(RecipestData.ids.valid);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody.isDeleted).toBe(true);
    });
});