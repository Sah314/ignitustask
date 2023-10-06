import React from 'react'

import {Itemspurchased} from '../features/Cartslice';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const Cart = () => {
  const dispatch = useDispatch();
  let totalcost = 0;
  const cartitems = useSelector((state)=>state.cart)
if(cartitems.length !==0){
  totalcost = cartitems.reduce((accumulator, currentItem) => accumulator + currentItem.cost, 0);
  console.log(totalcost)
}
  const handleBuyitems=()=>{
    dispatch(Itemspurchased(cartitems))
    console.log(cartitems);
       // console.log("handleBuy")
  }

  return (
    <div>
      <div>
Total Cost you encur is {totalcost} ETH
      </div>
      <button onClick={handleBuyitems}>Buy items</button>
      <Link to="/">Go to Homepage</Link>
    </div>
  )
}

export default Cart