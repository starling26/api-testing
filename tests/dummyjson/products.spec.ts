import { test, expect } from '../../fixtures/dummyjson.fixture/products.fixture';
import { ProductData } from '../../testData/products.data';

test.describe('Products API Tests', () => {

    test('TC-DJ-PROD-001 - Get All Products', async ({ products }) => {
        const response = await products.getAllProducts();
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('products');
        expect(Array.isArray(responseBody.products)).toBe(true);
        expect(responseBody).toHaveProperty('total');
        expect(responseBody).toHaveProperty('skip');
        expect(responseBody).toHaveProperty('limit');
    });

    test('TC-DJ-PROD-002 - Get a single Product', async ({ products }) => {
        const response = await products.getProductById(ProductData.ids.valid);
        expect(response.status()).toBe(200);
        
        const product = await response.json();
        expect(product).toHaveProperty('id', ProductData.ids.valid);
    });

    test('TC-DJ-PROD-003 - Search Products', async ({ products }) => {
        const response = await products.searchProducts(ProductData.search.valid);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('products');
        expect(Array.isArray(responseBody.products)).toBe(true);
    });

    test('TC-DJ-PROD-004 - Get Products by Category list', async ({ products }) => {
        const response = await products.getAllCategories();
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(Array.isArray(responseBody)).toBe(true);
        expect(responseBody.length).toEqual(ProductData.expected.totalCategories);
    });

    test('TC-DJ-PROD-005 - Get All Products Categories', async ({ products }) => {
        const response = await products.getAllCategories();
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(Array.isArray(responseBody)).toBe(true);
        expect(responseBody.length).toEqual(ProductData.expected.totalCategories);
    });

    test('TC-DJ-PROD-006 - Add New Product', async ({ products }) => {
        const response = await products.addProduct(ProductData.newProduct);
        expect(response.status()).toBe(201);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('id', ProductData.expected.newProductId);
        expect(responseBody).toHaveProperty('title');
        expect(responseBody.price).toEqual(ProductData.newProduct.price);
        expect(responseBody.id).toEqual(ProductData.expected.newProductId);
    });

    test('TC-DJ-PROD-007 - Update a Product', async ({ products }) => {
        const response = await products.updateProduct(
            ProductData.ids.valid,
            ProductData.updateProduct
        );
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('title');
        expect(responseBody.price).toEqual(ProductData.updateProduct.price);
        expect(responseBody.id).toEqual(ProductData.ids.valid);
    });

    test('TC-DJ-PROD-008 - Delete a Product', async ({ products }) => {
        const response = await products.deleteProduct(ProductData.ids.valid);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('id', ProductData.ids.valid);
    });
});