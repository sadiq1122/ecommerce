import ActionTypes from "../actions/ActionTypes";

const initialState = {
  product: {},
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_SELECTED_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };

    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return initialState;

    default:
      return state;
  }
};

export default ProductReducer;
