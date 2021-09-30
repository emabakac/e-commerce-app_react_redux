export const getTotalNumberOfItemsInCart = (state) => {
     if(state.cart.cart.length === 0) return 0

     const totalItems = state.cart.cart.map(cartItem => cartItem.amount)
     const reducer = (accumulator, currentValue) => accumulator + currentValue
     const sum = totalItems.reduce(reducer)
     return sum
}

export const getTotalPrice = (state) => {
     if(state.cart.cart.length === 0) return 0

     const totalPrice = state.cart.cart.map(cartItem => (cartItem.amount * cartItem.price))
     const reducer = (accumulator, currentValue) => accumulator + currentValue
     const sum = totalPrice.reduce(reducer)
     return sum
}

export const fetchProductsFromCart = (state) => {
     return state.cart.cart
}