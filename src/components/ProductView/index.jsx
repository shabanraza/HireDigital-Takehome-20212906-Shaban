import React, { useState,useContext, useEffect } from 'react';
import {
  useParams
} from "react-router-dom";
import AuthContext from './../../context/auth';

function ProductView() {
  const { productsList } = useContext(AuthContext);
  let { slug } = useParams();
  const {
  productId,
  productCategory,
  productName,
  productImage,
  productStock,
  productPrice,
  salePrice

  } = productsList.find(el => el.productId == slug);
 
  return (
    <div className='ProductView-wrapper' >
      <div className='productImage'>
        <img src={productImage} alt='productImage' />
      </div>
      <div className='product-info-wrapper'>
        <h3 className="productName">{productName}</h3>
        <hr/>
        <div>{productCategory}</div>
        <div className='price'>
          <span className='price-1'>$ {parseInt(productPrice)}</span>
          <span className='price-2'>$ {parseInt(salePrice)}</span>
        </div>
        <div className='stock-unit'>
          {productStock ? "In Stock" : "Out Of Stock"}
        </div>

      </div>
    </div>

  );
}

export default ProductView;