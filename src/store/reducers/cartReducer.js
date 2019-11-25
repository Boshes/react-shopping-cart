const initialState = {
  cart: []
}

const cartReducer = (state = initialState, { type, payload }) => {
  let cart = state.cart

  switch (type) {
    case 'ADD_TO_CART':
      cart.push(payload)

      return {
        ...state,
        cart: cart
      }

    case 'UPDATE_CART_QUANTITY':
      let item = cart.find(item => item.product.id === payload.productId)
      let newCart = cart.filter(item => item.product.id !== payload.productId)
      item.quantity = payload.quantity

      newCart.push(item)

      return {
        ...state,
        cart: newCart
      }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: cart.filter(item => item.product.id !== payload.productId)
      }

    default:
      return state
   }

}

export default cartReducer