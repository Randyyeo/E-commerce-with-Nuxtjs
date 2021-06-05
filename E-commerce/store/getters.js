export default {
    /* 
      return items from store
    */
    allProducts: (state) => state.allProducts,
    featuredProducts: (state) => state.featuredProducts,
    menProducts: (state) => state.menProducts,
    womenProducts: (state) => state.womenProducts,
    getCart: (state) => state.cartItems,
    getCartTotal: (state) =>
      state.cartItems.length < 1
        ? '0'
        : state.cartItems
            .map((el) => el.price * el.quantity)
            .reduce((a, b) => a + b),
  }