import {
  GET_ORDERS,
  GET_ORDER,
  CLEAR_ORDER,
  CLEAR_ORDERS,
} from '../actions/types';

// eslint-disable-next-line
export default (state = {}, actions) => {
  switch (actions.type) {
    case GET_ORDERS:
      return {
        ...state,
        orders: actions.payload.orders,
      };
    case GET_ORDER:
      return {
        ...state,
        orderDetails: actions.payload.order,
      };
    case CLEAR_ORDERS:
      return {
        ...state,
        orders: null,
      };
    case CLEAR_ORDER:
      return {
        ...state,
        orderDetails: null,
      };
    default:
      return state;
  }
};
