import ActionTypes from "./ActionTypes";

//Products Display

export const setProducts = (products) => {
  return {
    type: ActionTypes.ADD_ALL_PRODUCTS,
    payload: products,
  };
};

//Single product display
export const setProduct = (product) => {
  return {
    type: ActionTypes.ADD_SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

//cart reducers
export const updateCart = (cartItems) => {
  return {
    type: ActionTypes.UPDATE_CART,
    payload: cartItems,
  };
};

export const deleteFromCart = (productId) => {
  return {
    type: ActionTypes.DELETE_FROM_CART,
    payload: productId,
  };
};

export const setTotalPrice = (total) => {
  return {
    type: ActionTypes.SET_TOTAL_CART_PRICE,
    payload: total,
  };
};

//checkout reducers
export const updateCheckOut = (items) => {
  return {
    type: ActionTypes.UPDATE_CHECKOUT,
    payload: items,
  };
};

export const setCheckoutTotal = (total) => {
  return {
    type: ActionTypes.SET_CHECKOUT_TOTAL,
    payload: total,
  };
};


export const setOrders = (orders) =>{
  return{
    type:ActionTypes.SET_MY_ORDERS,
    payload:orders
  }
}

//cart gets deleted here
export const buyProduct = (product) => {
  return {
    type: ActionTypes.BUY_PRODUCT,
    payload: product,
  };
};

export const buyCartProduct = (product) => {
  return {
    type: ActionTypes.BUY_CART_PRODUCT,
    payload: product,
  };
};
export const buyAllProducts = (products) => {
  return {
    type: ActionTypes.BUY_ALL_CART_PRODUCTS,
    payload: products,
  };
};
