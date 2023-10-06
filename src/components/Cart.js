import React from 'react';
import { Itemspurchased } from '../features/Cartslice';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './Cart.css'; 

const Cart = () => {
  const dispatch = useDispatch();
  let totalcost = 0;
  const cartitems = useSelector((state) => state.cart);

  if (cartitems.length !== 0) {
    totalcost = cartitems.reduce(
      (accumulator, currentItem) => accumulator + currentItem.cost,
      0
    );
  }

  const handleBuyitems = () => {
    dispatch(Itemspurchased(cartitems));
    alert("items have been bought");
  };

  return (
    <div className="cart-container">
      {cartitems.map((obj) => (
        <div className="cart-item" key={obj.imgpath}>
          <img src={obj.imgpath} alt="" className="cart-image" />
          <div className="cost">{obj.cost} ETH</div>
        </div>
      ))}
      <div className="cart-total">
        Total Cost: {totalcost} ETH
      </div>
      <button onClick={handleBuyitems} className="buy-button">
        Buy items
      </button>
      <Link to="/" className="go-home-link">
        Go to Homepage
      </Link>
    </div>
  );
};

export default Cart;
