export default {
    async addItemToCart({ commit }, cartItem) {
      await commit('setCartItem', cartItem)
    },
    async deleteCartItem({ commit }, id) {
      await commit('removeCartItem', id)
    },
  }