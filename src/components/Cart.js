import React from 'react'

import {Itemspurchased} from '../features/Cartslice';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const Cart = () => {
  const dispatch = useDispatch();
  const cartitems = useSelector((state)=>state.cart)
  const handleBuyitems=()=>{
    
    dispatch(Itemspurchased(cartitems))
    console.log(cartitems);
       // console.log("handleBuy")
  }

  return (
    <div>
      <button onClick={handleBuyitems}>Buy items</button>
      <Link to="/">Go to Homepage</Link>
    </div>
  )
}

export default Cart