import React, { useState,useContext, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AuthContext from './../../context/auth';

function Product({
  productId,
  productCategory,
  productName,
  productImage,
  productStock,
  productPrice,
  salePrice
}) {
  const {  user } = useContext(AuthContext);

  const link =  user === 'buyer' ?
  `/product/${productId}` : `/seller/${productId}`
  
   ;
  return (
    <Link to={link} >
    <div className='product-wrapper' id={productId} key={productId}>
      <div className='product-img'><img src={productImage} width='300' hieght='270' alt={productName}/></div>
      <div className={'product-wrapper__name'}>
        {productName}
      </div>
      <div className="product-wrapper__priceBar">
        <span className='product-wrapper__price'>${  parseInt(productPrice)}</span>
        <span className='product-wrapper__salePrice'>${parseInt(salePrice)}</span>
        <span className='product-wrapper__stock'>{productStock ? "In Stock" : "Out of Stock"}</span>
      </div>
    </div>
    </Link>
  );
}

export default Product;