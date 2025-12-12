import{test, expect} from "../../fixtures/dummyjson.fixture/products.fixture";
import{ProductsNegativeData} from "../../testData/negative/products.negative.data";



test.describe("DummyJSON Products API Negative Tests", () => {

  test("TC-DJ-PROD-001: Get Single Product with Invalid ID", async ({products}) => {
    const response = await products.getProductByInvalidId(ProductsNegativeData.invalidId);
    expect([400, 404]).toContain(response.status());

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message", "Product with id 'invalid' not found");
  });

  test("TC-DJ-PROD-002: Get Single Product with Non-existent ID", async ({products}) => {
    const response = await products.getProductById(ProductsNegativeData.nonExistentId);
    expect(response.status()).toBe(404);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message", "Product with id '99999' not found");
  });
  test("TC-DJ-PROD-003: Get Single Product with Null ID", async ({products}) => {
    const response = await products.getProductByInvalidId(ProductsNegativeData.nullId);
    expect([400, 404]).toContain(response.status());

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message", "Product with id 'null' not found");
  });
  test("TC-DJ-PROD-004: Get Single Product with Negative ID", async ({products}) => {
    const response = await products.getProductByInvalidId(ProductsNegativeData.negativeId);
    expect([400, 404]).toContain(response.status());

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message", "Product with id '-1' not found");
  });
  test.fixme("TC-DJ-PROD-005: Search Products with Empty Query", async ({products}) => {
    const response = await products.searchProductsWithEmptyQuery(ProductsNegativeData.emptyQuery);
    expect(response.status()).toBe(400);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("products");
    expect(Array.isArray(responseBody.products)).toBe(true);
  });
  test.fixme("TC-DJ-PROD-006: Search Products with SQL Injection", async ({products}) => {
    //This test should fail with 400 Bad Request but DummyJSON API currently returns all products.
    const response = await products.searchProducts(ProductsNegativeData.sqlInjectionQuery);
    expect(response.status()).toBe(400);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("products");
    expect(Array.isArray(responseBody.products)).toBe(true);
  });

  test("TC-DJ-PROD-007: Get Products by Non-existent Category", async ({products}) => {
    const response = await products.getProductsByNonExistentCategory(ProductsNegativeData.nonExistentCategory);
    expect(response.status()).toBe(404);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message", "Product with id 'category' not found");
  });
  test.fixme("TC-DJ-PROD-008: Add Product with Missing Required Fields", async ({products}) => {
    //This test should fail with 400 Bad Request but DummyJSON API currently allows adding products with missing fields.
    const response = await products.addNewProduct(ProductsNegativeData.AddProductwithMissingRequiredFields as any);
    expect(response.status()).toBe(400);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("id");
  });
  test("TC-DJ-PROD-009: Update Product with Non-existent ID", async ({products}) => {

    const response = await products.updateProductWithNonExistentId(ProductsNegativeData.nonExistentUpdateId, ProductsNegativeData.validUpdateData);
    expect(response.status()).toBe(404);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message","Product with id '99999' not found");
  });
  test("TC-DJ-PROD-010: Delete Product with Non-existent ID", async ({products}) => {
    const response = await products.deleteProduct(ProductsNegativeData.nonExistentUpdateId);
    expect(response.status()).toBe(404);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message", "Product with id '99999' not found");
  });




});