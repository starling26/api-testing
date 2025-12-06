import{test,expect}from'../../fixtures/dummyjson.fixture/carts.fixture';
import{CartsNegativeData}from"../../testData.negative/carts.negative.data";

test.describe("DummyJSON Carts API Negative Tests", () => {

  test.fixme("NEG-TC-DJ-CART-NEG-001: Get Cart with Invalid ID", async ({carts}) => {
    //this test should fail with 400 Bad Request but DummyJSON API currently returns 200 OK with all carts.
    const response = await carts.getCartByInvalidId(CartsNegativeData.invalidCartId);
    expect([400, 404]).toContain(response.status());

  });
  test.fixme("NEG-TC-DJ-CART-NEG-002: Get Cart with Non-existent ID", async ({carts}) => {
    //this test should fail with 400 Bad Request but DummyJSON API currently returns 200 OK with all carts.
    const response = await carts.getCartByInvalidId(CartsNegativeData.nonExistentCartId);
    expect(response.status()).toBe(404);
    });

    test.fixme("NEG-TC-DJ-CART-NEG-003: Get Cart with Null ID", async ({carts}) => {
    //this test should fail with 400 Bad Request but DummyJSON API currently returns 200 OK with all carts.
    const response = await carts.getCartByInvalidId(CartsNegativeData.nullCartId);
    expect(response.status()).toBe(400);
    });

    test.fixme("NEG-TC-DJ-CART-NEG-004: Get Cart with Negative ID", async ({carts}) => {
    //this test should fail with 400 Bad Request but DummyJSON API currently returns 200 OK with all carts.
    const response = await carts.getCartByInvalidId(CartsNegativeData.negativeCartId);
    expect(response.status()).toBe(400);
    });

    test("NEG-TC-DJ-CART-NEG-005: Get Carts by Invalid User ID", async ({carts}) => {
    const response = await carts.invalidUserId(CartsNegativeData.invalidUserId);
    expect(response.status()).toBe(404);
    });

    test("NEG-TC-DJ-CART-NEG-006: Get Carts by Non-existent User", async ({carts}) => {
    const response = await carts.getcartsByUser(CartsNegativeData.nonExistentUserId);
    expect([404, 200]).toContain(response.status());
    });

    test("NEG-TC-DJ-CART-NEG-007: Add Cart with Missing Required Fields", async ({carts}) => {
    const response = await carts.addNewCart(CartsNegativeData.emptyCartData);
    expect(response.status()).toBe(404);
    });

    test("NEG-TC-DJ-CART-NEG-008: Add Cart with Invalid Product ID", async ({carts}) => {
    const response = await carts.addNewCart(CartsNegativeData.cartWithInvalidProductId);
    expect(response.status()).toBe(404);
    });

    test("NEG-TC-DJ-CART-NEG-009: Update Cart with Non-existent ID", async ({carts}) => {
    const response = await carts.updateAcart(CartsNegativeData.nonExistentUpdateCartId, CartsNegativeData.validCartUpdateData);
    expect(response.status()).toBe(404);
    });

    test("NEG-TC-DJ-CART-NEG-010: Delete Cart with Non-existent ID", async ({carts}) => {
    const response = await carts.deleteAcart(CartsNegativeData.nonExistentDeleteCartId);
    expect(response.status()).toBe(404);
    });

});