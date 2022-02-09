import ActionTypes from "../actions/ActionTypes";

const initialState = {
  items: [],
  totalPrice: 0,
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_CART:
      return {
        ...state,
        items: action.payload,
      };

    case ActionTypes.DELETE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.productId != action.payload),
      };
    case ActionTypes.SET_TOTAL_CART_PRICE:
      return {
        ...state,
        totalPrice: action.payload,
      };
    default:
      return initialState;
  }
};

export default CartReducer;
