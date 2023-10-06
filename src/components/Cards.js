import React from 'react'
import './Cards.css'
const Cards = ({pictures}) => {
  return (
    <>
    <div className='cardcont'>
{        pictures.map((obj)=>(<div className='card' key={obj.imgpath}>
  <img src={obj.imgpath} alt="" className='image'/>
  <div className='buyitem'>
<div style={{marginLeft:"3rem"}}>{obj.cost}ETH</div>
<button type="submit" style={{marginRight:"3rem"}}>Buy</button>
  </div>
</div>)

)
}    </div>
    </>
  )
}

export default Cards