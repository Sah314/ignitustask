import { configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist';
import {CartSlice} from '../features/Cartslice'; 
import { persistStore } from 'redux-persist'; 
import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, CartSlice.reducer);


const store = configureStore({
    reducer : persistedReducer
})
const persistor = persistStore(store); 

export { store, persistor }; 