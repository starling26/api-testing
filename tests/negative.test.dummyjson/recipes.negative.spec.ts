import{test,expect}from'../../fixtures/dummyjson.fixture/recipes.fixture';
import{RecipesNegativeData} from"../../testData/negative/recipes.negative.data";    

test.describe("DummyJSON Recipes API Negative Tests", () => {

  test.fixme("TC-DJ-REC-NEG-001: Get Recipe with Invalid ID", async ({recipes}) => {
    //this test should fail with 400 Bad Request but DummyJSON API currently returns 200 OK with all recipes.
    const response = await recipes.getRecipeByInvalidId(RecipesNegativeData.invalidRecipeId);
    expect(response.status()).toBe(400);

  });

  test.fixme("TC-DJ-REC-NEG-002: Get Recipe with Non-existent ID", async ({recipes}) => {
    //this test should fail with 400 Bad Request but DummyJSON API currently returns 200 OK with all recipes.
    const response = await recipes.getRecipeByInvalidId(RecipesNegativeData.nonExistentRecipeId);
    expect(response.status()).toBe(404);
  });

  test.fixme("TC-DJ-REC-NEG-003: Get Recipe with Null ID", async ({recipes}) => {
    //this test should fail with 400 Bad Request but DummyJSON API currently returns 200 OK with all recipes.
    const response = await recipes.getRecipeByInvalidId(RecipesNegativeData.nullRecipeId);
    expect(response.status()).toBe(400);
  });

  test.fixme("TC-DJ-REC-NEG-004: Search Recipes with Empty Query", async ({recipes}) => {
    //this test should fail with 400 Bad Request but DummyJSON API currently returns 200 OK with all recipes.
    const response = await recipes.searchRecipes(RecipesNegativeData.emptySearchQuery);
    expect(response.status()).toBe(400);
  });

  test.fixme("TC-DJ-REC-NEG-005: Search Recipes with SQL Injection", async ({recipes}) => {
    //this test should fail with 400 Bad Request but DummyJSON API currently returns all recipes.
    const response = await recipes.searchRecipes(RecipesNegativeData.sqlInjectionQuery);
    expect(response.status()).toBe(400);
  });

    test("TC-DJ-REC-NEG-006: Limit Recipes with Invalid Limit Value", async ({recipes}) => {
            //this test should fail with 400 Bad Request but DummyJSON API currently returns all recipes.
            const response = await recipes.getRecipesWithInvalidLimitValue(RecipesNegativeData.invalidLimitParams);
            expect(response.status()).toBe(400);

    });

    test("TC-DJ-REC-NEG-007: Get Recipes by Non-existent Tag", async ({recipes}) => {
            const response = await recipes.nonExistentTag(RecipesNegativeData.nonExistentTag);
            expect(response.status()).toBe(404);

    });

    test("TC-DJ-REC-NEG-008: Get Recipes by Non-existent Meal Type", async ({recipes}) => {
            const response = await recipes.getRecipesByNonExistentMealType(RecipesNegativeData.invalidMealType);
            expect(response.status()).toBe(404);

    });

    test.fixme("TC-DJ-REC-NEG-009: Add Recipe with Missing Required Fields", async ({recipes}) => {
            const response = await recipes.addRecipe(RecipesNegativeData.emptyRecipeData);
            expect(response.status()).toBe(400);

    });

    test("TC-DJ-REC-NEG-010: Update Recipe with Non-existent ID", async ({recipes}) => {
            const response = await recipes.updateRecipe(RecipesNegativeData.nonExistentUpdateRecipeId, RecipesNegativeData.validRecipeUpdateData);
            expect(response.status()).toBe(404);

    });


});