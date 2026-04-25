export const ADD_TO_CART = "ADD_TO_CART";
export const INCREASE_CART_ITEM = "INCREASE_CART_ITEM";
export const DECREASE_CART_ITEM = "DECREASE_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const TOGGLE_CART_ITEM = "TOGGLE_CART_ITEM";
export const CLEAR_CART = "CLEAR_CART";

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const increaseCartItem = (productId) => ({
  type: INCREASE_CART_ITEM,
  payload: productId,
});

export const decreaseCartItem = (productId) => ({
  type: DECREASE_CART_ITEM,
  payload: productId,
});

export const removeCartItem = (productId) => ({
  type: REMOVE_CART_ITEM,
  payload: productId,
});

export const toggleCartItem = (productId) => ({
  type: TOGGLE_CART_ITEM,
  payload: productId,
});


export const clearCart = () => ({
  type: CLEAR_CART,
});