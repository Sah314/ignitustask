import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    
]

const CartSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    
    ItemAdded(state,action){

    }
    
  }
})


export const { todoAdded, todoToggled } = CartSlice.actions

export default CartSlice.reducer