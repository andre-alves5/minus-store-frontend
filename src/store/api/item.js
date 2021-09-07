import axios from 'axios';
import { getHeaders } from '../actions/localStorage';

const url = process.env.REACT_APP_API_URL;

export const getItems = (currentPage, limit) =>
  axios.get(url + `/items?page=${currentPage}&limit=${limit}`, getHeaders());

export const getItem = (id) => axios.get(url + `/item/${id}`, getHeaders());

export const postItem = (itemData) =>
  axios.post(url + `/item`, itemData, getHeaders());

export const putItem = (id, itemData) =>
  axios.put(url + `/item/${id}`, itemData, getHeaders());

export const deleteItem = (id) =>
  axios.delete(url + `/item/${id}`, getHeaders());

export const putItemImage = (id, itemData) =>
  axios.put(url + `/item-img/items/${id}`, itemData, getHeaders());
