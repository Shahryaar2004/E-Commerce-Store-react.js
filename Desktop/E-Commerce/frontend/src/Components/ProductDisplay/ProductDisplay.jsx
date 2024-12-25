import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDisplay.css';
import { ShopContext } from '../../Context/ShopContext';

import star_icon from '../Assets/star_icon.png';
import stardull_icon from '../Assets/star_dull_icon.png';

const ProductDisplay = () => {
  const { productId } = useParams();
  const { all_products, addToCart } = useContext(ShopContext);

  const product = all_products.find((item) => item.id === parseInt(productId));

  if (!product) return <p>Product not found.</p>;

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {[product.image, product.image, product.image, product.image].map((img, index) => (
            <img key={index} src={img} alt="Product thumbnail" />
          ))}
        </div>
        <div className="productdisplay-image">
          <img className='productdisplay-main-img' src={product.image} alt="Product main" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className='product-display-right-star'>
          <img src={star_icon} alt="Star" />
          <img src={star_icon} alt="Star" />
          <img src={star_icon} alt="Star" />
          <img src={stardull_icon} alt="Star" />
          <p>(122)</p>
        </div>
        <div className="product-display-prices">
          <div className="product-old-price">${product.old_price}</div>
          <div className="product-new-price">${product.new_price}</div>
        </div>
        <div className="product-display-description">
          Stay cozy and stylish with this knitted jacket, designed to keep you warm and comfortable throughout the colder seasons.
          Crafted with high-quality, soft yarn, it features a versatile, relaxed fit that pairs perfectly with any outfit.
        </div>
        <div className="product-display-size">
          <div>Select size</div>
          <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XXL</div>
        </div>
        <button onClick={() => addToCart(productId)}>ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductDisplay;
