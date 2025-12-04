import { test, expect } from '../../fixtures/dummyjson.fixture/recipes.fixture';
import { RecipesData } from '../../testData/recipes.data';

test.describe('DummyJSON Recipes API Negative Tests', () => {

    test('NEG-TC-DJ-RECIP-001 - Get Non-existent Recipe', async ({ recipes }) => {
        const response = await recipes.getRecipeById(99999);
        expect(response.status()).toBe(404);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('message');
    });

    test('NEG-TC-DJ-RECIP-002 - Get Recipe with Negative ID', async ({ recipes }) => {
        const response = await recipes.getRecipeById(-1);
        expect([400, 404]).toContain(response.status());

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('message');
    });

    test('NEG-TC-DJ-RECIP-003 - Search Recipes with Empty Query', async ({ recipes }) => {
        const response = await recipes.searchRecipes('');
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('recipes');
        expect(responseBody.recipes.length).toBeGreaterThan(0);
    });

    test('NEG-TC-DJ-RECIP-004 - Search Recipes with Non-existent Query', async ({ recipes }) => {
        const response = await recipes.searchRecipes('nonexistentrecipe123456');
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('recipes');
        expect(responseBody.recipes).toHaveLength(0);
    });

    test('NEG-TC-DJ-RECIP-005 - Get Recipes with Negative Limit', async ({ recipes }) => {
        const response = await recipes.getRecipesWithPagination(-1, 0);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('recipes');
    });

    test('NEG-TC-DJ-RECIP-006 - Get Recipes with Negative Skip', async ({ recipes }) => {
        const response = await recipes.getRecipesWithPagination(10, -1);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('recipes');
    });

    test('NEG-TC-DJ-RECIP-007 - Sort Recipes with Invalid Sort Parameter', async ({ recipes }) => {
        const response = await recipes.getSortedRecipes('invalidfield' as any);
        expect([400, 200]).toContain(response.status());

        const responseBody = await response.json();
        if (response.status() === 200) {
            expect(responseBody).toHaveProperty('recipes');
        } else {
            expect(responseBody).toHaveProperty('message');
        }
    });

    test('NEG-TC-DJ-RECIP-008 - Get Recipes by Non-existent Tag', async ({ recipes }) => {
        const response = await recipes.getRecipesByTag('nonexistenttag123');
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('recipes');
        expect(responseBody.recipes).toHaveLength(0);
    });

    test('NEG-TC-DJ-RECIP-009 - Get Recipes by Empty Tag', async ({ recipes }) => {
        const response = await recipes.getRecipesByTag('');
        expect([404, 200]).toContain(response.status());

        const responseBody = await response.json();
        if (response.status() === 200) {
            expect(responseBody).toHaveProperty('recipes');
        } else {
            expect(responseBody).toHaveProperty('message');
        }
    });

    test('NEG-TC-DJ-RECIP-010 - Get Recipes by Non-existent Meal Type', async ({ recipes }) => {
        const response = await recipes.getRecipesByMealType('nonexistentmeal');
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('recipes');
        expect(responseBody.recipes).toHaveLength(0);
    });

    test('NEG-TC-DJ-RECIP-011 - Add Recipe with Empty Name', async ({ recipes }) => {
        const response = await recipes.addRecipe({
            name: '',
            ingredients: ['ingredient1', 'ingredient2'],
            instructions: ['step1', 'step2']
        });
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('id');
        expect(responseBody).toHaveProperty('name', '');
    });

    test('NEG-TC-DJ-RECIP-012 - Add Recipe with Empty Ingredients', async ({ recipes }) => {
        const response = await recipes.addRecipe({
            name: 'Test Recipe',
            ingredients: [],
            instructions: ['step1', 'step2']
        });
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('id');
        expect(responseBody).toHaveProperty('ingredients');
    });

    test('NEG-TC-DJ-RECIP-013 - Add Recipe with Missing Required Fields', async ({ recipes }) => {
        const response = await recipes.addRecipe({} as any);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('id');
    });

    test('NEG-TC-DJ-RECIP-014 - Update Non-existent Recipe', async ({ recipes }) => {
        const response = await recipes.updateRecipe(99999, {
            name: 'Updated Recipe',
            ingredients: ['new ingredient']
        });
        expect([404, 200]).toContain(response.status());

        const responseBody = await response.json();
        if (response.status() === 200) {
            expect(responseBody).toHaveProperty('id', 99999);
            expect(responseBody).toHaveProperty('name', 'Updated Recipe');
        } else {
            expect(responseBody).toHaveProperty('message');
        }
    });

    test('NEG-TC-DJ-RECIP-015 - Update Recipe with Invalid Data', async ({ recipes }) => {
        const response = await recipes.updateRecipe(1, {
            name: '',
            ingredients: []
        });
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('id', 1);
        // API maintains original value when updating with empty field
        expect(responseBody).toHaveProperty('name');
        expect(responseBody.name).not.toBe('');
    });

    test('NEG-TC-DJ-RECIP-016 - Delete Non-existent Recipe', async ({ recipes }) => {
        const response = await recipes.deleteRecipe(99999);
        expect([404, 200]).toContain(response.status());

        const responseBody = await response.json();
        if (response.status() === 200) {
            expect(responseBody).toHaveProperty('id', 99999);
            expect(responseBody).toHaveProperty('isDeleted', true);
        } else {
            expect(responseBody).toHaveProperty('message');
        }
    });

    test('NEG-TC-DJ-RECIP-017 - Delete Recipe with Negative ID', async ({ recipes }) => {
        const response = await recipes.deleteRecipe(-1);
        expect([404, 200]).toContain(response.status());

        const responseBody = await response.json();
        if (response.status() === 200) {
            expect(responseBody).toHaveProperty('id', -1);
            expect(responseBody).toHaveProperty('isDeleted', true);
        } else {
            expect(responseBody).toHaveProperty('message');
        }
    });
});
