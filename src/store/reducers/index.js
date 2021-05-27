import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import userReducer from './users_reducer';
import itemReducer from './items_reducer';
import orderReducer from './orders_reducer';

const reducers = combineReducers({
  auth: authReducer,
  user: userReducer,
  item: itemReducer,
  order: orderReducer,
});

export default reducers;
