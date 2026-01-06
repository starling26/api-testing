import { test, expect } from '../../fixtures/dummyjson.fixture/carts.fixture';
import { CartData } from '../../testData/positive/carts.data';

test.describe('DummyJSON - Carts API Tests', () => {

    test('TC-DJ-CART-001: Get All Carts', async ({ carts }) => {
        const response = await carts.getAllCarts();
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('carts');
        expect(Array.isArray(responseBody.carts)).toBe(true);
        expect(responseBody).toHaveProperty('total');
        expect(responseBody).toHaveProperty('skip');
        expect(responseBody).toHaveProperty('limit');
    });

    test('TC-DJ-CART-002: Get a single Cart', async ({ carts }) => {
        const response = await carts.getAsingleCart(CartData.cartIds.toUpdate);
        expect(response.status()).toBe(200);
        
        const cart = await response.json();
        expect(cart).toHaveProperty('id');
        expect(cart).toHaveProperty('products');
        expect(cart).toHaveProperty('total');
    });

        test('TC-DJ-CART-003: Get Carts by User', async ({ carts }) => {
        const response = await carts.getcartsByUser(CartData.userIds.withCarts);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('carts');
        expect(Array.isArray(responseBody.carts)).toBe(true);
        expect(responseBody).toHaveProperty('total');
    });

    test.fixme('TC-DJ-CART-004: Add a new Cart', async ({ carts }) => {
        // This test should pass with 201 Created but DummyJSON API currently returns 404 Not Found.
        const response = await carts.addNewCart(CartData.carts.newCart);
        expect(response.status()).toBe(201);

        const cart = await response.json();
        expect(cart).toHaveProperty('id');
        expect(cart).toHaveProperty('userId');
        expect(cart).toHaveProperty('products');
       
    });

    test('TC-DJ-CART-005: Update a Cart', async ({ carts }) => {
        const response = await carts.updateAcart(
            CartData.cartIds.toUpdate,
            CartData.carts.updateCart
        );
        expect(response.status()).toBe(200);

        const cart = await response.json();
        expect(cart).toHaveProperty('id', CartData.cartIds.toUpdate);
        expect(cart).toHaveProperty('products');
    });
    

    test('TC-DJ-CART-006: Delete a Cart', async ({ carts }) => {
        const response = await carts.deleteAcart(CartData.cartIds.toDelete);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody.isDeleted).toBe(true);
        expect(responseBody).toHaveProperty('id', CartData.cartIds.toDelete);
    });


});