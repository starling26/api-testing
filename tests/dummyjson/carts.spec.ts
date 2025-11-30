import { test,expect } from '../../fixtures/dummyjson.fixture/carts.fixture';

test.describe('Carts API Tests', () => {
    
    test('TC-DJ-CART-001 - Get All Carts', async ({ carts }) => {
        const response = await carts.getAllCarts();
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('carts');
        expect(Array.isArray(responseBody.carts)).toBe(true);
        expect(responseBody).toHaveProperty('total');
        expect(responseBody).toHaveProperty('skip');
        expect(responseBody).toHaveProperty('limit');
    });
    test('TC-DJ-CART-002 - Get a single Cart', async ({ carts }) => {
        const cartId = 1;
        const response = await carts.getAsingleCart(cartId);
        expect(response.status()).toBe(200);
        
        const cart = await response.json();
        expect(cart).toHaveProperty('id', cartId);
        expect(cart).toHaveProperty('products');
        expect(cart).toHaveProperty('total');

    });
    test('TC-DJ-CART-003 - Add a new Cart', async ({ carts }) => {
        const response = await carts.addNewCart();
        expect(response.status()).toBe(201);

        const cart = await response.json();
        expect(cart).toHaveProperty('id');
        expect(cart).toHaveProperty('userId', 5);
        expect(cart).toHaveProperty('products');
    });
    test('TC-DJ-CART-004 - Update a Cart', async ({ carts }) => {
        const response = await carts.updateAcart();
        expect(response.status()).toBe(200);

        const cart = await response.json();
        expect(cart).toHaveProperty('id', 1);
        expect(cart).toHaveProperty('userId', 5);
        expect(cart).toHaveProperty('products');
    });
    test('TC-DJ-CART-005 - Delete a Cart', async ({ carts }) => {
        const response = await carts.deleteAcart();
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody.isDeleted).toBe(true);
    });
});

    