import { configureStore } from '@reduxjs/toolkit'

import {CartSlice} from '../features/Cartslice'; 


const store = configureStore({
    reducer : CartSlice.reducer
})

export default store;