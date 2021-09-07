import { GET_ITEMS, GET_ITEM, CLEAR_ITEM, CLEAR_ITEMS } from '../actions/types';

// eslint-disable-next-line
export default (state = {}, actions) => {
  switch (actions.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: actions.payload.items,
      };
    case GET_ITEM:
      return {
        ...state,
        itemDetails: actions.payload.item,
      };
    case CLEAR_ITEMS:
      return {
        ...state,
        items: null,
      };
    case CLEAR_ITEM:
      return {
        ...state,
        itemDetails: null,
      };
    default:
      return state;
  }
};
