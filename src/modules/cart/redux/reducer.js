import {
     addProductToCartAction,
     deleteProductFromCartAction,
     emptyCartAction,
     incrementProductInCartAction,
     decrementProductInCartAction,
   } from "./actionTypes";

const initialState = {
     cart: []
}

const cartReducer = (state = initialState, action) => {
     switch(action.type) {
          case addProductToCartAction:

               if(state.cart.length === 0) {
                    return { ...state, cart: [{ ...action.payload, amount: 1 }] }
               }

               const isItemInCart = state.cart.map(item => {
                    if(item.id === action.payload.id) {
                         return {...item, amount: item.amount + 1 }
                    }
                    return item
               })

               return state.cart.find(item => item.id === action.payload.id) ?
                { ...state, cart: isItemInCart } :
                { ...state, cart: [...state.cart, { ...action.payload, amount: 1 }] }
          case deleteProductFromCartAction: 
               const filteredCart = state.cart.filter(item => item.id !== action.payload)
               return { ...state, cart: filteredCart }
          case emptyCartAction:
               return { ...state, cart: [] }
          case incrementProductInCartAction:
               const incrementedAmount = state.cart.map(item => {
                    if(item.id === action.payload) {
                         return { ...item, amount: item.amount + 1 }
                    }
                    return item
               })

               return { ...state, cart: incrementedAmount }
          case decrementProductInCartAction:
               const decrementedAmount = state.cart.map(item => {
                    if(item.amount === 1) { 
                         return { ...item, amount: 1 }
                    }
                    if(item.id === action.payload) {
                         return { ...item, amount: item.amount - 1 }
                    }
                    return item
               })
               return { ...state, cart: decrementedAmount }
          default:
               return state;
     }
}

export default cartReducer