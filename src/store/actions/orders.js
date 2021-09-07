import * as type from './types';
import errorHandling from './errorHandling';
import * as apiOrder from '../api/order';

export const getOrders = (pageAtual, limit) => async (dispatch) => {
  try {
    const { data } = await apiOrder.getOrders(pageAtual, limit);
    dispatch({ type: type.GET_ORDERS, payload: data });
  } catch (error) {
    errorHandling(error);
  }
};

export const getOrder = (id) => async (dispatch) => {
  try {
    const { data } = await apiOrder.getOrder(id);
    dispatch({ type: type.GET_ORDER, payload: data });
  } catch (error) {
    errorHandling(error);
  }
};

export const postOrder = (orderData, cb) => async () => {
  try {
    const { data } = await apiOrder.postOrder(orderData);
    cb({ erro: data });
  } catch (error) {
    cb(errorHandling(error));
  }
};

export const putOrder = (orderData, cb) => async () => {
  try {
    const { data } = await apiOrder.putOrder(orderData);
    cb({ erro: data });
  } catch (error) {
    cb(errorHandling(error));
  }
};

export const deleteOrder = (id, cb) => async () => {
  try {
    const { data } = await apiOrder.deleteOrder(id);
    cb({ erro: data });
  } catch (error) {
    cb(errorHandling(error));
  }
};

export const clearOrder = () => {
  return function (dispatch) {
    dispatch({ type: type.CLEAR_ORDER });
  };
};

export const clearOrders = () => {
  return function (dispatch) {
    dispatch({ type: type.CLEAR_ORDERS });
  };
};
