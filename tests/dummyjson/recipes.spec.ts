import { test, expect } from '../../fixtures/dummyjson.fixture/recipes.fixture';

test.describe('DummyJSON Recipes API Tests', () => {

    test('TC-DJ-RECIP-001 - Get All Recipes', async ({ recipes }) => {
        const response = await recipes.getAllrecipes();
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('recipes');
        expect(Array.isArray(responseBody.recipes)).toBe(true);
        expect(responseBody.total).toEqual(50)
   
    });
    test('TC-DJ-RECIP-002 - Get Single Recipe', async ({ recipes }) => {
        const recipeId = 1;
        const response = await recipes.getAsingleRecipe(recipeId);
        expect(response.status()).toBe(200);

        const recipe = await response.json();
        expect(recipe).toHaveProperty('id', recipeId);
        expect(recipe).toHaveProperty('name');
        expect(recipe).toHaveProperty('ingredients');
    });
    test('TC-DJ-RECIP-003 - Search Recipes', async ({ recipes }) => {
        const query = 'Margherita';
        const response = await recipes.searchRecipes(query);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('recipes');
        expect(Array.isArray(responseBody.recipes)).toBe(true);
            
    });
    test('TC-DJ-RECIP-004 - Limit & Skip recipes', async ({ recipes }) => {
        const limit = 5;
        const skip = 10;
        const response = await recipes.limitSkipRecipes(limit, skip);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('recipes');
        expect(responseBody.limit).toEqual(5);
        expect(responseBody.total).toEqual(50); 
      
    });
    test('TC-DJ-RECIP-005 - Sort Recipes', async ({ recipes }) => {
        const order = 'asc';
        const response = await recipes.sortRecipes(order);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('recipes');
        expect(responseBody.total).toEqual(50);
        expect(responseBody.recipes.length).toEqual(30);

    });
    test('TC-DJ-RECIP-006 - Get All Recipe Tags', async ({ recipes }) => {
        const response = await recipes.getAllRecipesTags();
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(Array.isArray(responseBody)).toBe(true);
        expect(responseBody.length).toEqual(87);
    });
    test('TC-DJ-RECIP-007 - Get All Recipes by Tag', async ({ recipes }) => {
        const tag = 'Pakistani';
        const response = await recipes.getAllRecipesByTag(tag);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('recipes');
        expect(Array.isArray(responseBody.recipes)).toBe(true);
        expect(responseBody.total).toEqual(7);
    });
    test('TC-DJ-RECIP-008 - Get All Recipes by Meal', async ({ recipes }) => {
        const meal = 'snack';
        const response = await recipes.getAllRecipesByMealType(meal);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('recipes');
        expect(Array.isArray(responseBody.recipes)).toBe(true);
        expect(responseBody.total).toEqual(3);
        });
    test('TC-DJ-RECIP-009 -  Add Recipe', async ({ recipes }) => {
         //HTTP Status Code: 200 OK (Incorrect - should be 201 Created)
        const response = await recipes.addRecipe();

        expect(response.status()).toBe(201);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('id');
        expect(responseBody).toHaveProperty('title', 'New Recipe');
        expect(responseBody).toHaveProperty('description', 'Delicious new recipe');
        expect(responseBody).toHaveProperty('ingredients');
        expect(Array.isArray(responseBody.ingredients)).toBe(true);
        expect(responseBody.ingredients.length).toBeGreaterThan(0);
    });
});