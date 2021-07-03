import React, { useState,useContext, useEffect } from 'react';
import './App.css';
import ProductList from './components/productList';
import FilterBox from './components/FilterBox';
import SearchBox from './components/SearchBox';
import Category from './components/Category';
import useDebounce from './components/useDebounce'
import Header from './components/Header';
import AuthContext from './context/auth';


function App() {
  const { productsList } = useContext(AuthContext);

  const [search,setSearch] = useState('');
  const [option,setOption] = useState('');
  const [loading,setLoading] = useState(false);
  const [products,setProducts] = useState([]);
  useEffect(()=>{
    setProducts(productsList)
  },[productsList])
  const searchProduct = (e)=>{ debugger
    setSearch(e.target.value.toLowerCase())
    setLoading(false)
    const arr = productsList.filter((prod)=>{
      if(prod.productName.toLowerCase().includes(search)){
        return prod;
      }
    });
    setProducts(arr)
    setLoading(false)
    e.preventDefault();
  }


  const category = productsList.map(prod=> prod.productCategory );



  const shortProduct =(e)=>{
    let sortedArray = [];
    setOption(e.target.value);
    if(e.target.value === 'h2l'){
      sortedArray = products.sort((a,b)=> parseInt(b.productPrice) - parseInt(a.productPrice)  )
     
    }else{
       sortedArray = products.sort((a,b)=> parseInt(a.productPrice) - parseInt(b.productPrice)  )
    }

    setProducts(sortedArray);
   e.preventDefault();

  }

  const filterByCategory = (catgry)=>{ console.log(catgry)
    const productbyCategory = productsList.filter(prod => prod.productCategory.toLowerCase() == catgry.toLowerCase());
    console.log(productbyCategory)
    setProducts(productbyCategory);    
  }

  return (
   <>
    <div className='filterBar'>
      <SearchBox search={search} searchProduct={searchProduct}/>
      <FilterBox shortProduct={(e)=>shortProduct(e)} option={option}/>
      </div>
      <div className='container'>
        <Category category={category} filterByCategory={filterByCategory}/>
        <ProductList products={products} loading={loading}/>
      </div>
    </>
  );
}

export default App;