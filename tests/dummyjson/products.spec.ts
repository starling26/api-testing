import { test, expect } from "../../fixtures/dummyjson.fixture/products.fixture";
import { ProductData } from "../../testData/positive/products.data";

test.describe("Products API Tests", () => {

  test("TC-DJ-PROD-001 - Get All Products", async ({ products }) => {
    const response = await products.getAllProducts();
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toHaveProperty("products");
    expect(Array.isArray(body.products)).toBe(true);
  });

  test("TC-DJ-PROD-002 - Get a single Product", async ({ products }) => {
    const response = await products.getSingleProduct(ProductData.ids.valid);
    expect(response.status()).toBe(200);

    const product = await response.json();
    expect(product).toHaveProperty("id", ProductData.ids.valid);
  });

    test("TC-DJ-PROD-003 - Search Products", async ({ products }) => {
    const response = await products.searchProducts(ProductData.search.valid);
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(Array.isArray(body.products)).toBe(true);
  });

      test("TC-DJ-PROD-004 - Get Products by Category list", async ({ products }) => {
    const response = await products.getProductsByCategoryList();
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(Array.isArray(body)).toBe(true);
    expect(body.length).toEqual(ProductData.expected.totalCategories);
  });


  test("TC-DJ-PROD-005 - Get All Products Categories", async ({ products }) => {
    const response = await products.getAllProductsCategories();
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(Array.isArray(body)).toBe(true);
  });

  test("TC-DJ-PROD-006 - Add New Product", async ({ products }) => {
    const response = await products.addNewProduct(ProductData.newProduct);
    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body).toHaveProperty("title", ProductData.newProduct.title);
    expect(body.price).toEqual(ProductData.newProduct.price);
  });

  test("TC-DJ-PROD-007 - Update a Product", async ({ products }) => {
    const response = await products.updateProduct(
      ProductData.ids.valid,
      ProductData.updateProduct
    );
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.price).toEqual(ProductData.updateProduct.price);
  });

  test("TC-DJ-PROD-008 - Delete a Product", async ({ products }) => {
    const response = await products.deleteProduct(ProductData.ids.valid);
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toHaveProperty("id", ProductData.ids.valid);
  });
});