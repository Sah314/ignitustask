import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart:[],
    items:[
        {
            imgpath:"img1.png",
            cost:0.0005
          },
          {
            imgpath:"img2.png",
            cost:0.0004
          },
          {
            imgpath:"img3.png",
            cost:0.0003
          }
    ]
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {  
    ItemAdded(state,action){
        const {imgpath,cost} = action.payload;
        let present = state.cart.find((ele)=>{
            return ele.imgpath===imgpath
        })
        if(!present){
            state.cart.push({
                imgpath:imgpath,
                cost:cost
            })
        }
        else{
            console.log("element already present");
        }
    }
    ,
    Itemspurchased(state,action){
         state.items = state.items.filter(ele=>{
            return !state.cart.some(ele2=>
                ele.imgpath===ele2.imgpath && ele.cost===ele2.cost)
         })
         state.cart = state.cart.filter((item) => {
          return !action.payload.some((purchasedItem) =>
            purchasedItem.imgpath === item.imgpath && purchasedItem.cost === item.cost
          );
        });
         
         
    }
  }
})

export const { ItemAdded, Itemspurchased } = CartSlice.actions

export default CartSlice.reducer