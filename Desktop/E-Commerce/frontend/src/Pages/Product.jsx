
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import BreadCrums from '../Components/BreadCrums/BreadCrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  
  // Find product based on productId (convert productId to a number for matching)
  const product = all_products.find((e) => e.id === Number(productId));

  return (
    <div>
      <BreadCrums product={product} />
      <ProductDisplay product={product} />
      
    </div>
  );
};

export default Product;
