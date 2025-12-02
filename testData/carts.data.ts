export const CartData = {
  carts: {
    newCart: {
      userId: 5,
      products: [
        { productId: 1, quantity: 2 },
        { productId: 50, quantity: 1 }
      ]
    }, 
    updateCart: {
      userId: 5,
      products: [
        { productId: 1, quantity: 3 },
        { productId: 2, quantity: 2 }
      ]
    },
    singleCart: {
      userId: 3,
      products: [
        { productId: 10, quantity: 1 }
      ]
    }
  },
  
  // Cart IDs for testing different scenarios
  cartIds: {
    valid: 1,
    nonExistent: 99999,
    toUpdate: 1,
    toDelete: 1
  },
  
  // Pagination parameters
  pagination: {
    limit: 10,
    skip: 5,
    defaultLimit: 30,
    defaultSkip: 0
  },
  
  // User IDs for testing user-specific cart operations
  userIds: {
    valid: 5,
    withCarts: 3,
    withoutCarts: 999,
    nonExistent: 99999
  }
};
