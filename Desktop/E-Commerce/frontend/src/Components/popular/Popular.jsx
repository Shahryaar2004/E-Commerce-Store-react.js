import React from 'react';
import './popular.css';
import data_product from '../Assets/data'; // Assuming data_product is an array of product objects.

const ProductCard = ({ id, name, image, new_price, old_price }) => {
  return (
    <div className="product-card" key={id}>
      <img src={image} alt={name} className="product-image" />
      <h2 className="product-name">{name}</h2>
      <div className="product-prices">
        <span className="new-price">${new_price}</span>
        <span className="old-price">${old_price}</span>
      </div>
    </div>
  );
};

const Popular = () => {
  return (
    <div className="popular">
      <h1>Popular in Women</h1>
      <hr />
      <div className="popular-items">
        {data_product.map((item, i) => (
          <ProductCard
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
