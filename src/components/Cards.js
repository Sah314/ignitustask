import React from 'react'
import './Cards.css'
import { useState,useEffect } from 'react';
import {ItemAdded} from '../features/Cartslice.js';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const Cards = () => {
  //const selector = new useSelector();
  const [isEmpty,setIsEmpty] = useState(false);
  const pictures = useSelector((state)=>state.items)
 // console.log(pictures);
  const dispatch = useDispatch();

  const handleBuy=(obj)=>{

    dispatch(ItemAdded(obj));
    alert("successfully added to cart")
//console.log(obj);

  }

  useEffect(() => {
   if(pictures.length===0){
      setIsEmpty(true);
   }
   console.log(isEmpty);
  }, [pictures])
  
  return (
    <>
    <div className='cardcont'>

{  !isEmpty  &&  (pictures.map((obj)=>(<div className='card' key={obj.imgpath}>
  <img src={obj.imgpath} alt="" className='image'/>
  <div className='buyitem'>
<div style={{marginLeft:"3rem"}}>{obj.cost} ETH</div>
<button style={{marginRight:"3rem"}} onClick={()=>handleBuy(obj)}>Buy</button>
  </div>
</div>)
))
}
{
  isEmpty&& (
    <div>No items to display</div>
  )
}
    </div>
    </>
  )
}

export default Cards