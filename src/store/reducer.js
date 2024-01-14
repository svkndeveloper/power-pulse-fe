import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';
import { persistReducer } from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const reducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
});