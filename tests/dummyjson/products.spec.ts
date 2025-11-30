import { test, expect } from '../../fixtures/dummyjson.fixture/products.fixture';

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
        const productId = 1;
        const response = await products.getProductById(productId);
        expect(response.status()).toBe(200);
        
        const product = await response.json();
        expect(product).toHaveProperty('id', productId);
    });
    test('TC-DJ-PROD-003 - Search Products', async ({ products }) => {
        const query = 'phone';
        const response = await products.searchProducts(query);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('products');
        expect(Array.isArray(responseBody.products)).toBe(true);
    });

    test('TC-DJ-PROD-004 - Get Products by Category list', async ({ products }) => {
        const response = await products.GetProductsByCategoryList();
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(Array.isArray(responseBody)).toBe(true);
        expect(responseBody.length).toEqual(24);
    });
    test('TC-DJ-PROD-005 - Get All Products Categories', async ({ products }) => {
        const response = await products.GetAllProductsCategories();
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(Array.isArray(responseBody)).toBe(true);
        expect(responseBody.length).toEqual(24);
    });
    test('TC-DJ-PROD-006 - Add New Product', async ({ products }) => {
        const response = await products.AddNewProduct();
        expect(response.status()).toBe(201);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('id',195);
        expect(responseBody).toHaveProperty('title');
        expect(responseBody.price).toEqual(999);
        expect(responseBody.id).toEqual(195);
    })
    test('TC-DJ-PROD-007 - Update a Product', async ({ products }) => {
        const response = await products.UpdateAProduct();
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('title');
        expect(responseBody.price).toEqual(899);
        expect(responseBody.id).toEqual(1);
    });
    test('TC-DJ-PROD-008 - Delete a Product', async ({ products }) => {
        const response = await products.DeleteAroduct();
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('id',1);
    });    


}); 