// testData/testData.negative/recipes.negative.data.ts
export const RecipesNegativeData = {
  // TC-DJ-REC-NEG-012: Get Single Recipe with Invalid ID
  invalidRecipeId: "invalid",

  // TC-DJ-REC-NEG-013: Get Single Recipe with Non-existent ID
  nonExistentRecipeId: 99999,

  // TC-DJ-REC-NEG-014: Get Single Recipe with Null ID
  nullRecipeId: null,

  // TC-DJ-REC-NEG-015: Search Recipes with Empty Query
  emptySearchQuery: "",

  // TC-DJ-REC-NEG-016: Search Recipes with SQL Injection
  sqlInjectionQuery: "' OR '1'='1",

  // TC-DJ-REC-NEG-017: Limit Recipes with Invalid Limit Value
  invalidLimitParams: {
    limit: -5,
    skip: 0
  },

  // TC-DJ-REC-NEG-018: Get Recipes by Non-existent Tag
  nonExistentTag: "nonexistent",

  // TC-DJ-REC-NEG-019: Get Recipes by Non-existent Meal Type
  invalidMealType: "invalid",

  // TC-DJ-REC-NEG-020: Add Recipe with Missing Required Fields
  emptyRecipeData: {},

  // TC-DJ-REC-NEG-021: Update Recipe with Non-existent ID
  nonExistentUpdateRecipeId: 99999,
  validRecipeUpdateData: {
    name: "Updated Recipe",
    ingredients: ["ingredient1", "ingredient2"],
    instructions: ["step1", "step2"]
  }
};
