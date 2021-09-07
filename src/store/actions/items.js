import * as type from './types';
import errorHandling from './errorHandling';
import * as apiItem from '../api/item';

export const getItems = (pageAtual, limit) => async (dispatch) => {
  try {
    const { data } = await apiItem.getItems(pageAtual, limit);
    dispatch({ type: type.GET_ITEMS, payload: data });
  } catch (error) {
    errorHandling(error);
  }
};

export const getItem = (id) => async (dispatch) => {
  try {
    const { data } = await apiItem.getItem(id);
    dispatch({ type: type.GET_ITEM, payload: data });
  } catch (error) {
    errorHandling(error);
  }
};

export const postItem = (itemData, cb) => async () => {
  try {
    const { data } = await apiItem.postItem(itemData);
    cb({ erro: data });
  } catch (error) {
    cb(errorHandling(error));
  }
};

export const putItem = (itemData, cb) => async () => {
  try {
    const { data } = await apiItem.putItem(itemData);
    cb({ erro: data });
  } catch (error) {
    cb(errorHandling(error));
  }
};

export const putItemImage = (itemData, cb) => async () => {
  try {
    const { data } = await apiItem.putItemImage(itemData);
    cb({ erro: data });
  } catch (error) {
    cb(errorHandling(error));
  }
};

export const deleteItem = (id, cb) => async () => {
  try {
    const { data } = await apiItem.deleteItem(id);
    cb({ erro: data });
  } catch (error) {
    cb(errorHandling(error));
  }
};

export const clearItem = () => {
  return function (dispatch) {
    dispatch({ type: type.CLEAR_ITEM });
  };
};

export const clearItems = () => {
  return function (dispatch) {
    dispatch({ type: type.CLEAR_ITEMS });
  };
};
