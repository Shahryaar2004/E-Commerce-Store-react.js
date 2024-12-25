import React, { useContext } from 'react';
import './CartItems.css'; 
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const { all_products, cartItems, removefromCart } = useContext(ShopContext);

  return (
    <div className='cart-items'>
      <div className="cartitmes-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_products.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div className="cartitems-format" key={e.id}>
              <img src={e.image} alt="" className='cartitem-product-icon' />
              <p>{e.name}</p>
              <p>{e.price}</p>
              <button className="cartitems-quantity">
                <p>{cartItems[e.id]}</p>
              </button>
              <p>{e.new_price * cartItems[e.id]}</p>
              <img 
                src={remove_icon} 
                onClick={() => removefromCart(e.id)} 
                alt="Remove item" 
                className="remove-icon"
              />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default CartItems;
