import { configureStore } from '@reduxjs/toolkit'

import {CartSlice} from '../features/CartSlice'; 


const store = configureStore({
    reducer : CartSlice.reducer
})

export default store;