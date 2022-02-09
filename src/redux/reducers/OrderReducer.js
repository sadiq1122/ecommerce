import ActionTypes from "../actions/ActionTypes";

const initialState = {
  orders: [],
};

const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_MY_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };

    default:
      return initialState;
  }
};

export default OrderReducer;
