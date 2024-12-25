// import React from 'react'
// import './CSS/ShopCategory.css'
// //import dropdown_icon from '../Components/Assets/dropdown_icon.png'
// import all_product from '../Components/Assets/all_product'
// import Item from '../Components/items/Items'
// const ShopCategory = (props) => {
//   return (
//     <div className='shop-category'>
//       <img src={props.banner} alt="banner" />

//       <div className="shopcategory-indexsort">
//         <p>
//           <span>Showing 1-12</span>out of 36 products
//         </p>
//         <div className="shopcategory-sort">
//           {/* //<img src={dropdown_icon} alt="" /> */}
//         </div>
//         <div className="shopcategory-products">
//   {all_product.map((item, i) => (
//     <Item
//       key={i}
//       id={item.id}
//       name={item.name}
//       image={item.image}
//       new_price={item.new_price}
//       old_price={item.old_price}
//     />
//   ))}
// </div>

       
//       </div>
//     </div>
//   )
// }

// export default ShopCategory;


// src/Pages/ShopCategory.js
import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/ShopCategory.css';
import all_product from '../Components/Assets/all_product';
import Item from '../Components/items/Items';

const ShopCategory = (props) => {
  return (
    <div className='shop-category'>
      <img src={props.banner} alt="banner" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-products">
          {all_product.map((item, i) => (
            <Link to={`/product/${item.id}`} key={i}>
              <Item
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
