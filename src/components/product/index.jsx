import React, { useState, useContext, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import AuthContext from './../../context/auth';

function Product({
  productId,
  productCategory,
  productName,
  productImage,
  productStock,
  productPrice,
  salePrice,
  views
}) {
  const history = useHistory();
  const { user,updateViewNumber } = useContext(AuthContext);



  const navigate = () => {
    if (user === 'buyer') {
      history.push(`/product/${productId}`);
      updateViewNumber(productId);
    } else {
      history.push(`/seller/${productId}`)
    }

  }
  return (
    <div className='product-wrapper' id={productId} key={productId} onClick={navigate}>
      <div className='product-img'><img src={productImage} width='300' hieght='270' alt={productName} /></div>
      <div className={'product-wrapper__name'}>
        {productName}
      </div>
      <div className="product-wrapper__priceBar">
        <span className='product-wrapper__price'>${parseInt(productPrice)}</span>
        <span className='product-wrapper__salePrice'>${parseInt(salePrice)}</span>
        <span className='product-wrapper__stock'>{productStock ? "In Stock" : "Out of Stock"}</span>
      </div>
      {user == 'seller' &&
        <div className='views'>
          Views: {views}
        </div>
      }
    </div>

  );
}

export default Product;