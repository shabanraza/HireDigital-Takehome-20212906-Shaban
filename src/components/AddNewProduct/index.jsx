import React, { useState,useContext, useEffect } from 'react';
import {
  useParams,
  useHistory
} from "react-router-dom";
import AuthContext from './../../context/auth';


function AddNewProduct() {
  const history = useHistory();
  const { addNewProduct } = useContext(AuthContext);
  const [state, setState] = useState({});
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
    })
    
  }

  const submitData = (e) => {
    addNewProduct(state)
    history.push('/');
    e.preventDefault();
  }

  return (
    <div className='SellerView-wrapper' >
      <div className='addnew'>
        <button className='addnewbtn'>Add New</button>
      </div>

      <form className="seller-form" onSubmit={submitData}>
        <input value={state.productCategory} placeholder='product category' className='product-input' type='text' name='productCategory' onChange={handleChange} required />

        <input value={state.productName} type='text' placeholder='product Name' className='product-input' name='productName' onChange={handleChange} required />

        <input value={state.productImage} type='text' placeholder='product Image' className='product-input' name='productImage' onChange={handleChange} required />
       
       

        <input value={state.productPrice} type='text' placeholder='product Price' className='product-input' name='productPrice' onChange={handleChange} required />

        <input value={state.salePrice} type='text' placeholder='sale Price' className='product-input' name='salePrice' onChange={handleChange} required />
 <div className='product_stock'>
         <input checked={state.productStock} type='checkbox' className='product-checkbox' name='productStock' onChange={handleChange}  />
          <span>In Stock</span>
        </div>
        <button className='login-btn' type="submit" >Save</button>
      </form>
    </div>

  );
}

export default AddNewProduct;