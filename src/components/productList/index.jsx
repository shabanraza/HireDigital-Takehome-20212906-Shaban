import React, { useState, useEffect } from 'react';
import products from '../../../data/products.json';
import Product from './../product';

function ProductList({value,products,loading}) {
  if(loading){
    return "searching..."
  }
  return (
   
      <div className='productList-wrapper'>
        {
          products.map((product) => (
            <Product {...product} />)
          )
        }

      </div>
   
  );
}

export default ProductList;