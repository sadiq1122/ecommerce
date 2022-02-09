import ActionTypes from "../actions/ActionTypes";

const initialState = {
  products: [],
};

const ProductListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};

export default ProductListReducer;
