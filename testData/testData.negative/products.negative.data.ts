// testData/testData.negative/products.negative.data.ts
export const ProductsNegativeData = {
  // TC-DJ-PROD-009: Get Single Product with Invalid ID
  invalidId: "invalid",

  // TC-DJ-PROD-010: Get Single Product with Non-existent ID
  nonExistentId: 99999,

  // TC-DJ-PROD-011: Get Single Product with Null ID
  nullId: null,

  // TC-DJ-PROD-012: Get Single Product with Negative ID
  negativeId: -1,

  // TC-DJ-PROD-013: Search Products with Empty Query
  emptyQuery: " ",

  // TC-DJ-PROD-014: Search Products with SQL Injection
  sqlInjectionQuery: "' OR '1'='1",

  // TC-DJ-PROD-015: Get Products by Non-existent Category
  nonExistentCategory: "nonexistent",

  // TC-DJ-PROD-016: Add Product with Missing Required Fields
  AddProductwithMissingRequiredFields: {
    title: "New Product",
    // Missing price
    description: "Updated description"
  },

  // TC-DJ-PROD-017 & TC-DJ-PROD-018: Non-existent ID for update/delete
  nonExistentUpdateId: 99999,

  validUpdateData: {
    title: "Updated Product",
    price: 99.99,
    description: "Updated description"
  },

  // TC-DJ-PROD-013: Search Products with Empty Query
  searchProductsWithEmptyQuery: {
    query: "",
  },
};
