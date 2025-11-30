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
        { quantity: 2 }
      ]
    },
     singleCart: {
      userId: 3,
      products: [
        { productId: 10, quantity: 1 }
      ]
    }
  },
  cartIds: {
    valid: 1,
    nonExistent: 99999,
    toUpdate: 1,
    toDelete: 1
  }
};
