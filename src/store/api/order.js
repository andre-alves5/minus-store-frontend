import axios from 'axios';
import { getHeaders } from '../actions/localStorage';

const url = process.env.REACT_APP_API_URL;

export const getOrders = (currentPage, limit) =>
  axios.get(url + `/orders?page=${currentPage}&limit=${limit}`, getHeaders());

export const getOrder = (id) => axios.get(url + `/order/${id}`, getHeaders());

export const postOrder = (orderData) =>
  axios.post(url + `/order`, orderData, getHeaders());

export const putOrder = (id, orderData) =>
  axios.put(url + `/order/${id}`, orderData, getHeaders());

export const deleteOrder = (id) =>
  axios.delete(url + `/order/${id}`, getHeaders());
