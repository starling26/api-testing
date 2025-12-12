// testData/testData.negative/carts.negative.data.ts
export const CartsNegativeData = {
  // TC-DJ-CARTS-007: Get Single Cart with Invalid ID
  invalidCartId: "invalid",

  // TC-DJ-CARTS-008: Get Single Cart with Non-existent ID
  nonExistentCartId: 99999,

  // TC-DJ-CARTS-009: Get Single Cart with Null ID
  nullCartId: null,

  // TC-DJ-CARTS-010: Get Single Cart with Negative ID
  negativeCartId: -1,

  // TC-DJ-CARTS-011: Get Carts by Invalid User ID
  invalidUserId: "invalid",

  // TC-DJ-CARTS-012: Get Carts by Non-existent User
  nonExistentUserId: 99999,

  

  // TC-DJ-CARTS-013: Add Cart with Missing Required Fields
  emptyCartData: {},

  // TC-DJ-CARTS-014: Add Cart with Invalid Product ID
  cartWithInvalidProductId: {
    userId: 1,
    products: [
      {
        id: 99999, // Non-existent product ID
        quantity: 1
      }
    ]
  },

  // TC-DJ-CARTS-015: Update Cart with Non-existent ID
  nonExistentUpdateCartId: 99999,
  validCartUpdateData: {
    userId: 1,
    products: [
      {
        id: 1,
        quantity: 2
      }
    ]
  },

  // TC-DJ-CARTS-016: Delete Cart with Non-existent ID
  nonExistentDeleteCartId: 99999
};
